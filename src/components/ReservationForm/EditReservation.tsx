import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationFormData } from "../../types/reservation";
import {
  getReservationById,
  mapFormDataToReservation,
} from "../../utils/reservationUtils";
import ReservationForm from "./ReservationForm";

const EditReservation: React.FC = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState<ReservationFormData>();

  useEffect(() => {
    if (!id) {
      return;
    }

    try {
      const res = getReservationById(id);
      setReservation(res);
    } catch (error) {
      console.error("Błąd podczas przetwarzania danych rezerwacji:", error);
    }
  }, [id]);

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
