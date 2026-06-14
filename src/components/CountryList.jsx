import {} from "react";
import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
