import React, { ChangeEventHandler, FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { ReservationFormData } from "../../types/reservation";
import { isAfter, isTodayOrAfter } from "../../utils/dateUtils";
import Input from "./Input/Input";
import "./ReservationForm.css";

interface ReservationFormProps {
  title: string;
  reservation: ReservationFormData;
  onChange: (reservation: ReservationFormData) => void;
  onSubmit: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  title,
  reservation,
  onChange,
  onSubmit,
}) => {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const newReservation = { ...reservation, [name]: value };
    onChange(newReservation);
  };

  const disabled =
    !reservation.guestName ||
    !isTodayOrAfter(reservation.checkInDate) ||
    !isAfter(reservation.checkOutDate, reservation.checkInDate);

  return (
    <div className="reservation-form">
      <h1 className="form-header">{title}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="guestName"
          label="Imię i nazwisko"
          value={reservation.guestName}
          onChange={handleChange}
          required
        />
        <Input
          name="checkInDate"
          type="date"
          label="Przyjazd"
          value={reservation.checkInDate}
          min={new Date().toISOString().substring(0, 10)}
          onChange={handleChange}
          required
        />
        <Input
          name="checkOutDate"
          type="date"
          label="Wyjazd"
          value={reservation.checkOutDate}
          min={new Date().toISOString().substring(0, 10)}
          onChange={handleChange}
          required
        />
        <Input
          name="notes"
          label="Notatki"
          value={reservation.notes}
          onChange={handleChange}
        />
        <div className="form-buttons">
          <button type="submit" className="save-btn" disabled={disabled}>
            Zapisz
          </button>
          <button className="cancel-btn">
            <Link to="/">Anuluj</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
