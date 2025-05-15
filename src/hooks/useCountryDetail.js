import { useQuery } from "@tanstack/react-query";
import { fetchCountryDetail } from "../services/apiCountries";

export function useCountryDetail(countryCode) {
    const {
      data: country,
      isPending,
      isError,
    } = useQuery({
      queryKey: ["country", countryCode],
      queryFn: () => fetchCountryDetail(countryCode),
      keepPreviousData: true,
    });

    return {country, isPending, isError}
}