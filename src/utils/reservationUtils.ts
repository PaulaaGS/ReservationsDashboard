import { Reservation, ReservationFormData, ReservationResponse, ReservationStatus } from '../types/reservation';
import { v4 as uuid } from 'uuid'

const isValidStatus = (status: string): status is ReservationStatus => {
  return ['Reserved', 'Due In', 'In House', 'Due Out', 'Checked Out', 'Canceled', 'No Show'].includes(status);
};

export const mapResponseObjectToReservation = (data: ReservationResponse): Reservation => {
  if (!isValidStatus(data.status)) {
    throw new Error(`Nieprawidłowy status rezerwacji: ${data.status}`);
  }
  
  return {
    id: data.id,
    guestName: data.guestName,
    checkInDate: data.checkInDate,
    checkOutDate: data.checkOutDate,
    status: data.status,
    roomNumber: data.roomNumber,
    notes: data.notes,
    email: data.email
  };
}; 

export const getStatus = (data: ReservationFormData): ReservationStatus => {
  if (data.status) {
    return data.status
  }

  if (new Date(data.checkInDate!).toDateString() === new Date().toDateString()) {
    return 'Due In'
  }

  return 'Reserved'
}

export const mapFormDataToReservation = (data: ReservationFormData): Reservation => {
  if (!data.guestName || !data.checkInDate || !data.checkOutDate) {
    throw new Error('Nieprawidłowe dane');
  }

  const status = getStatus(data);

  return {
    id: data.id ?? uuid(),
    guestName: data.guestName,
    checkInDate: data.checkInDate,
    checkOutDate: data.checkOutDate,
    status,
    roomNumber: data.roomNumber,
    notes: data.notes,
    email: data.email
  }
}