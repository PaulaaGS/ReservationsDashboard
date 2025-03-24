import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReservations } from "../../context/ReservationContext";
import { ReservationFormData } from "../../types/reservation";
import {
  getReservationById,
  mapFormDataToReservation,
} from "../../utils/reservationUtils";
import ReservationForm from "./ReservationForm";

const EditReservation: React.FC = () => {
  const { id } = useParams();
  const { editReservation } = useReservations();
  const navigate = useNavigate();
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
    editReservation(newReservation);
    navigate("/");
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
