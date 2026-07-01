import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import {Link} from "react-router-dom"


function CountryDetail({ onAddLike }) {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/restcountries/restcountries/master/src/main/resources/countriesV3.1.json",
    )
      .then((res) => res.json())
      .then((data) => {
        const foundCountry = data.find((country) => country.ccn3 === code);

        setCountry(foundCountry);
      });
  }, [code]);

  if (!country) {
    return <Loader />;
  }

  console.log("deteil", code);

  function Like() {
    onAddLike(code);
  }

  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <Link to={"/"} className="">
          <button className="shadow-xl/30 hover:bg-sky-100 bg-white border rounded-lg px-4 p-2 self-start">
            {" "}
            ← Back
          </button>
        </Link>
        <div className="shadow-xl/30 flex self-center @max-xs:flex-col sm:flex-row flex-col text-center font-(family-name:Arial, sans-serif, Helvetica) p-10 min-w-sm max-w-4xl w-full bg-gray-100 rounded-lg">
          <img
            src={country.flags.png}
            className="sm:w-1/2 @max-xs:w-full object-cover rounded-xl"
          />
          <div className="flex flex-col gap-5 px-10 w-full items-start justify-center">
            <div className="self-center text-xl relative w-full">
              <h1 className="font-bold text-3xl">{country.name.common}</h1>
              <h3>{country.name.official}</h3>
              <button
                onClick={Like}
                className="absolute top-0 right-0 shadow-xl/30 p-1 rounded-lg"
              >
                Like ❤️
              </button>
            </div>
            <div className="flex sm:flex-col @max-xs:flex-row flex-wrap items-center gap-2 sm:max-h-40 p-4">
              <h3>
                Region : <span>{country.region}</span>
              </h3>
              <h3>
                Capital : <span>{country.capital}</span>
              </h3>
              <h3>
                Languages:
                <span className="text-red-400">
                  {" "}
                  {country.languages &&
                    Object.values(country.languages).join(", ")}
                </span>
              </h3>
              <h3>
                time Zone:<span>{country.timezones}</span>
              </h3>
              <h3>
                Area: <span>{country.area} km²</span>
              </h3>
              <h3>
                Population: <span>{country.population}</span>
              </h3>
              <h3>
                Sub region: <span>{country.subregion}</span>
              </h3>
              <h3>
                Currency:
                <span>
                  {" "}
                  {country.currencies &&
                    Object.values(country.currencies)
                      .map(
                        (currency) => `${currency.name} (${currency.symbol})`,
                      )
                      .join(", ")}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
