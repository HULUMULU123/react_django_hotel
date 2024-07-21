import { useQuery } from "@tanstack/react-query";
import { getAboutRooms } from "../../services/apiAboutRooms";

export function useAboutRooms() {
  const {
    isLoading,
    data: aboutRooms,
    error,
  } = useQuery({
    queryKey: ["aboutRooms"],
    queryFn: getAboutRooms,
  });
  return { isLoading, aboutRooms, error };
}
