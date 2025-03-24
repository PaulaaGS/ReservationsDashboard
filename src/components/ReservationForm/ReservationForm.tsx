import React, { FormEventHandler } from "react";
import "./ReservationForm.css";
import Input from "./Input/Input";
import { Link } from "react-router-dom";

const ReservationForm: React.FC = () => {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    alert("Form submited");
  };

  return (
    <div className="reservation-form">
      <h1 className="card-header">Dodaj rezerwację</h1>
      <form className="card-content" onSubmit={handleSubmit}>
        <Input name="guestName" label="Imię i nazwisko:" />
        <Input name="checkInDate" type="date" label="Przyjazd:" />
        <Input name="checkOutDate" type="date" label="Wyjazd:" />
        <Input name="notes" label="Notatki:" />
        <button type="submit">Zapisz</button>
        <Link to="/">Anuluj</Link>
      </form>
    </div>
  );
};

export default ReservationForm;
