import { useQuery } from "@tanstack/react-query";
import { getRoom } from "../../services/apiRoom";

export function useRoom(roomId) {
  const {
    isLoading,
    data: room,
    error,
  } = useQuery({
    queryKey: ["room"],
    queryFn: () => getRoom(roomId),
  });
  return { isLoading, room, error };
}
