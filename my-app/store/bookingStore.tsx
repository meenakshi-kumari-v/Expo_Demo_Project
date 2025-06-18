import { create } from "zustand";

type Booking = {
  id: number;
  propertyId: number;
};

type Store = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  removeBooking: (BookingId: number) => void;
};

export const useBookingStore = create<Store>((set) => ({
  bookings: [],
  addBooking: (booking) =>
    set((state) => {
      const alreadyBooked = state.bookings.some((b) => b.id === booking.id);
      if(alreadyBooked) return state;
      return {
        bookings: [...state.bookings, booking],
      }
    }),
  removeBooking: (bookingId) =>
    set((state) => ({
      bookings: state.bookings.filter((c) => c.id !== bookingId),
    })),
}));
