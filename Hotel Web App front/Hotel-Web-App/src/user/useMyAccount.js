import { useQuery } from "@tanstack/react-query";
import { getMyAccount } from "../services/apiMyAccount";

export function useMyAccount(email) {
  const {
    isLoading,
    data: account,
    error,
  } = useQuery({
    queryKey: ["myaccount"],
    queryFn: () => getMyAccount(email),
  });
  return { isLoading, account, error };
}
