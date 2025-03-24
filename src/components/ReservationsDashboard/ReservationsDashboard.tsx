import { useEffect, useState } from "react";
import reservationsData from "../../data/reservations.json";
import { Reservation } from "../../types/reservation";
import { mapResponseObjectToReservation } from "../../utils/reservationUtils";
import ReservationBoard from "./ReservationBoard";
import "./ReservationsDashboard.css";

function ReservationsDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const validReservations = reservationsData.map(
          mapResponseObjectToReservation
        );
        setReservations(validReservations);
      } catch (error) {
        console.error("Błąd podczas przetwarzania danych rezerwacji:", error);
      } finally {
        setLoading(false);
      }
    }, 800);
  }, []);

  return loading ? (
    <div className="loading">Ładowanie danych rezerwacji...</div>
  ) : (
    <ReservationBoard reservations={reservations} />
  );
}

export default ReservationsDashboard;
