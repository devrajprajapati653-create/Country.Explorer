import {} from "react";
import CountryCard from "./CountryCard";
import {Link} from "react-router-dom"

function Like({ cart, countries }) {
  
  const likedCountries = Object.keys(cart);
  const likedCountriesData = countries.filter((country) =>
    likedCountries.includes(country.ccn3),
  );

  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <Link to={"/"} className="">
          <button className="shadow-xl/30 hover:bg-sky-100 bg-white border rounded-lg px-4 p-2 self-start">
            {" "}
            ← Back
          </button>
        </Link>
        <div className="overflow-auto text-center font-(family-name:Arial, sans-serif, Helvetica) p-5 text-white min-w-sm max-w-6xl bg-gray-100 rounded-lg self-center">
          <div className="grid grid-cols-3 gap-10">
            {likedCountriesData.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Like;
