import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBooking";

export function useBooking() {
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: getBooking,
  });
  return { isLoading, booking, error };
}