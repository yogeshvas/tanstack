import { useQuery } from "@tanstack/react-query";
import { fetchCardsData } from "../tan";

const useGetCardsData = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: fetchCardsData,
  });
};

export default useGetCardsData;
