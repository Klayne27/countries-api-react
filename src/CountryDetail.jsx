import { Link, useNavigate, useParams } from "react-router-dom";
import { useCountryDetail } from "./hooks/useCountryDetail";

function CountryDetail() {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const { country, isPending, isError } = useCountryDetail(countryCode);


  if (isPending) return <p className="text-white">Loading country detail...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-[#202c37] px-4 pt-25 transition-colors">
      <div className="container mx-auto ">
        <button
          onClick={() => navigate(-1)}
          className="mb-12 inline-flex items-center px-9 py-2 bg-white dark:bg-[#2b3945] text-black dark:text-white rounded-md shadow-md hover:opacity-80 transition-colors cursor-pointer"
        >
          &larr; Back
        </button>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-40 text-black dark:text-white transition-colors">
          <div className="w-full md:w-1/2 max-w-md md:max-w-full flex justify-center rounded-lg">
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className=" w-full h-auto shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            {" "}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 ">
              {country.name.common}
            </h1>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3 mb-8">
              {" "}
              <div>
                <p className="text-lg">
                  <span className="font-semibold">Native Name:</span>{" "}
                  {Object.values(country.name.nativeName)[0].common}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Region:</span> {country.region}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion || "N/A"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-lg">
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {country.tld ? country.tld.join(", ") : "N/A"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Currencies:</span>{" "}
                  {Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ") || "N/A"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Languages:</span>{" "}
                  {Object.values(country.languages).join(", ") || "N/A"}
                </p>
              </div>
            </div>
            {country.borders && country.borders.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <h3 className="text-xl font-semibold mr-2">Border Countries:</h3>
                {country.borders.map((borderCode) => (
                  <Link
                    to={`/country/${borderCode}`}
                    key={borderCode}
                    className="inline-block"
                  >
                    <span className="px-6 py-2 text-sm bg-white dark:bg-[#2b3945] shadow-md text-black dark:text-white rounded hover:opacity-80 cursor-pointer transition-colors">
                      {borderCode}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
