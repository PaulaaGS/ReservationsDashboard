import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import reservationsData from "../data/reservations.json";
import { Reservation, ReservationStatus } from "../types/reservation";
import { mapResponseObjectToReservation } from "../utils/reservationUtils";

interface ReservationsContextType {
  reservations: Reservation[];
  changeStatus: (id: string, status: ReservationStatus) => void;
  addReservation: (reservation: Reservation) => void;
  editReservation: (reservation: Reservation) => void;
  deleteReservation: (id: string) => void;
}
export const ReservationsContext =
  createContext<ReservationsContextType | null>(null);

export const useReservations = (): ReservationsContextType => {
  const context = useContext(ReservationsContext);

  if (context === null) {
    throw new Error(
      "useReservations must be used within a ReservationContextProvider"
    );
  }

  return context;
};

export const ReservationsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
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

  const changeStatus = (id: string, status: ReservationStatus) => {
    const newReservations = [...reservations];
    const reservation = newReservations.find((x) => x.id === id);

    if (reservation) {
      reservation.status = status;
      setReservations(newReservations);
    }
  };

  const addReservation = (reservation: Reservation) => {
    setReservations([...reservations, reservation]);
  };

  const editReservation = (reservation: Reservation) => {
    const newReservations = [
      ...reservations.filter((x) => x.id !== reservation.id),
      reservation,
    ];
    setReservations(newReservations);
  };

  const deleteReservation = (id: string) => {
    setReservations((r) => r.filter((x) => x.id !== id));
  };

  return loading ? (
    <div className="loading">Ładowanie danych rezerwacji...</div>
  ) : (
    <ReservationsContext.Provider
      value={{
        reservations,
        changeStatus,
        addReservation,
        editReservation,
        deleteReservation,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};
