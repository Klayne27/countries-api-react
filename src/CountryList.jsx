import { Link } from "react-router-dom";
import { useCountries } from "./hooks/useCountries";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function CountryList() {
  const { countries, isPending, isError } = useCountries();
  const { searchTerm, selectedRegion } = useSelector((state) => state.data);

  const filteredCountries = useMemo(() => {
    let currentCountries = countries;

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      currentCountries = currentCountries.filter((country) =>
        country.name.common.toLowerCase().includes(lower)
      );
    }

    if (selectedRegion !== "All") {
      currentCountries = currentCountries.filter(
        (country) => country.region === selectedRegion
      );
    }

    return currentCountries;
  }, [searchTerm, countries, selectedRegion]);


  if (isPending) return <p>Loading countries...</p>;
  if (isError) return <p>Error</p>;
  if (!countries) return <p>No countries found.</p>;

  return (
    <div className="bg-[#f0f0f0] dark:bg-[#202c37] min-h-screen transition-colors">
      <div className="flex justify-between pt-30 px-46">
        <SearchBar />
        <Filter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto py-8">
        {filteredCountries.map((country) => (
          <Link to={`/country/${country.cca3}`} key={country.cca3}>
            <div className="bg-white dark:bg-[#2b3945] rounded-md shadow-lg overflow-hidden h-full hover:scale-105 duration-300 flex flex-col  text-white">
              <img
                src={country.flags.svg}
                alt={`${country.name} flag`}
                className="w-full h-48 object-cover "
              />
              <div className="p-6 flex-grow pb-12 text-black dark:text-white">
                {" "}
                {/* flex-grow makes this div take up available space */}
                <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span> {country.region}
                </p>
                <p>
                  <span className="font-semibold">Capital:</span> {country.capital}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
