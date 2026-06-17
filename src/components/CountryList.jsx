import {useState} from "react";
import CountryCard from "./CountryCard";
import Search from "./Search";

function CountryList({ countries }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  
  let filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  console.log("filteredCountries:", filteredCountries);

  console.log("sort:", sort);

  if (sort === "Americas") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Americas",
    );
  } else if (sort === "Africa") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Africa",
    );
  } else if (sort === "Asia") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Asia",
    );
  } else if (sort === "Antarctic") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Antarctic",
    );
  } else if (sort === "Europe") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Europe",
    );
  } else if (sort === "Oceania") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Oceania",
    );
  }

  if (sort === "low to High") {
    filteredCountries.sort((a, b) => a.population - b.population);
  } else if (sort === "High to Low") {
    filteredCountries.sort((a, b) => b.population - a.population);
  }


  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <Search setSearchTerm={setSearchTerm} setSort={setSort} />
        <div className="overflow-auto text-center font-(family-name:Arial, sans-serif, Helvetica) p-5 text-white min-w-sm max-w-6xl bg-gray-100 rounded-lg self-center">
          <div className="grid grid-cols-3 gap-10">
            {filteredCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryList;
