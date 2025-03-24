import { useState } from "react";
import { ReservationFormData } from "../../types/reservation";
import { mapFormDataToReservation } from "../../utils/reservationUtils";
import ReservationForm from "./ReservationForm";

const AddReservation: React.FC = () => {
  const [reservation, setReservation] = useState<ReservationFormData>({});

  const handleSubmit = () => {
    const newReservation = mapFormDataToReservation(reservation);
    alert(`Form submited, ${JSON.stringify(newReservation)}`);
    // save newReservation to the JSON file
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
