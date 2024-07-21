import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../services/apiMyBookings";

export function useMyBookings(email) {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["mybookings"],
    queryFn: () => getMyBookings(email),
  });
  return { isLoading, bookings, error };
}
