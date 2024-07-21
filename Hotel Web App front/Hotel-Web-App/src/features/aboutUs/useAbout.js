import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../../services/apiAbout";

export function useAbout() {
  const {
    isLoading,
    data: about,
    error,
  } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
  return { isLoading, about, error };
}
