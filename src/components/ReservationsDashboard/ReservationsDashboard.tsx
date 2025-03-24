import { useState, useEffect } from 'react'
import './ReservationsDashboard.css'
import { Reservation } from '../../types/reservation'
import { mapResponseObjectToReservation } from '../../utils/reservationUtils'
import reservationsData from '../../data/reservations.json'
import ReservationBoard from './ReservationBoard'

function ReservationsDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      try {
        const validReservations = reservationsData.map(mapResponseObjectToReservation);
        setReservations(validReservations);
      } catch (error) {
        console.error('Błąd podczas przetwarzania danych rezerwacji:', error);
      } finally {
        setLoading(false);
      }
    }, 800)
  }, [])

  return (
      <main className="main-content">
        {loading ? (
          <div className="loading">Ładowanie danych rezerwacji...</div>
        ) : (
          <ReservationBoard reservations={reservations} />
        )}
      </main>
  )
}

export default ReservationsDashboard
