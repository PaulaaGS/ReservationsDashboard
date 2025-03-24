import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReservations } from "../../context/ReservationContext";
import { ReservationFormData } from "../../types/reservation";
import { mapFormDataToReservation } from "../../utils/reservationUtils";
import ReservationForm from "./ReservationForm";

const AddReservation: React.FC = () => {
  const { addReservation } = useReservations();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState<ReservationFormData>({});

  const handleSubmit = () => {
    const newReservation = mapFormDataToReservation(reservation);
    addReservation(newReservation);
    navigate("/");
  };

  return (
    <ReservationForm
      title="Dodaj rezerwację"
      reservation={reservation}
      onChange={setReservation}
      onSubmit={handleSubmit}
    />
  );
};

export default AddReservation;
