import { useState } from "react";
import { ReservationFormData } from "../../types/reservation";
import { mapFormDataToReservation } from "../../utils/reservationUtils";
import ReservationForm from "./ReservationForm";

const EditReservation: React.FC = () => {
  const [reservation, setReservation] = useState<ReservationFormData | null>(
    null
  );

  const handleSubmit = () => {
    const newReservation = mapFormDataToReservation(reservation!);
    alert(`Form submited, ${JSON.stringify(newReservation)}`);
    // save newReservation to the JSON file
  };

  return reservation ? (
    <ReservationForm
      title="Edytuj rezerwację"
      reservation={reservation}
      onChange={setReservation}
      onSubmit={handleSubmit}
    />
  ) : null;
};

export default EditReservation;
