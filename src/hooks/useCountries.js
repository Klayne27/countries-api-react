import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "../services/apiCountries";

export function useCountries() {
    const {data: countries, isPending, isError}  = useQuery({
        queryKey: ['countries'],
        queryFn: fetchCountries
    })

    return {countries, isPending, isError}
}