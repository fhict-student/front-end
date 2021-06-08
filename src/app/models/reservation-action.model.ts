import { ReservationAction } from '../enum/reservation-action.enum';

/* The backend reservation class */
export interface IReservationAction {
    reservationId: number;
    action: ReservationAction;
}
