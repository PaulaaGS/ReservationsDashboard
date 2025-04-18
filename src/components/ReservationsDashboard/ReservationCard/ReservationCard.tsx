import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Reservation } from "../../../types/reservation";
import { formatDate } from "../../../utils/dateFormatters";
import { getStatusesToChange } from "../../../utils/reservationUtils";
import "./ReservationCard.css";
import { useReservations } from "../../../context/ReservationContext";

interface ReservationCardProps {
  reservation: Reservation;
  statusColor: string;
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  reservation,
  statusColor,
}) => {
  const { changeStatus, deleteReservation } = useReservations();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((o) => !o);
  };

  return (
    <div className="reservation-card">
      <div
        className="card-status-indicator"
        style={{ backgroundColor: statusColor }}
      ></div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="guest-name">{reservation.guestName}</h3>
          <div className="action-button">
            <button className="btn-action" onClick={handleClick}>
              ⋮
            </button>
            {isOpen && (
              <div className="context-menu">
                <button className="menu-btn">
                  <Link to={`/edit/${reservation.id}`}>Edytuj</Link>
                </button>
                <button
                  className="menu-btn"
                  onClick={() => deleteReservation(reservation.id)}
                >
                  Usuń
                </button>
                <div className="change-status">
                  <div>Zmień status:</div>
                  {getStatusesToChange(reservation.status).map((status) => (
                    <button
                      key={status}
                      className="menu-btn"
                      onClick={() => changeStatus(reservation.id, status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="stay-dates">
          <div className="date-range">
            <span className="date-label">Przyjazd:</span>
            <span className="date-value">
              {formatDate(reservation.checkInDate)}
            </span>
          </div>
          <div className="date-range">
            <span className="date-label">Wyjazd:</span>
            <span className="date-value">
              {formatDate(reservation.checkOutDate)}
            </span>
          </div>
        </div>

        {reservation.roomNumber && (
          <div className="room-number">
            <span className="room-label">Pokój:</span>
            <span className="room-value">{reservation.roomNumber}</span>
          </div>
        )}

        {reservation.notes && (
          <div className="notes">
            <p>{reservation.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationCard;
