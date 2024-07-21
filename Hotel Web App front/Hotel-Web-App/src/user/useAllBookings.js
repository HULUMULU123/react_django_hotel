import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../services/apiAllBookings";

export function useAllBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["allbookings"],
    queryFn: getAllBookings,
  });
  return { isLoading, bookings, error };
}
