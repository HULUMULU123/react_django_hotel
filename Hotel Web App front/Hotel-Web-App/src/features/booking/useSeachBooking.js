import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBooking";

export function useSearchBooking(startDate, endDate, guests) {
  const {
    isSearching,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(startDate, endDate, guests),
  });
  return { isSearching, booking, error };
}
