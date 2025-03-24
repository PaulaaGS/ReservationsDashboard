import React, { ChangeEventHandler, FormEventHandler } from "react";
import "./ReservationForm.css";
import Input from "./Input/Input";
import { Link } from "react-router-dom";
import { ReservationFormData } from "../../types/reservation";

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

  return (
    <div className="reservation-form">
      <h1 className="card-header">{title}</h1>
      <form className="card-content" onSubmit={handleSubmit}>
        <Input
          name="guestName"
          label="Imię i nazwisko:"
          value={reservation.guestName}
          onChange={handleChange}
        />
        <Input
          name="checkInDate"
          type="date"
          label="Przyjazd:"
          value={reservation.checkInDate}
          onChange={handleChange}
        />
        <Input
          name="checkOutDate"
          type="date"
          label="Wyjazd:"
          value={reservation.checkOutDate}
          onChange={handleChange}
        />
        <Input
          name="notes"
          label="Notatki:"
          value={reservation.notes}
          onChange={handleChange}
        />
        <button type="submit">Zapisz</button>
        <Link to="/">Anuluj</Link>
      </form>
    </div>
  );
};

export default ReservationForm;
