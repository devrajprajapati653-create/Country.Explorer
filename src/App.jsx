import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Search from "./components/Search";
import Loader from "./components/Loader";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

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

  if(countries.length === 0){
     return <Loader />
  }

  
  return (
    <>
      <div className="flex flex-col gap-5 p-20 bg-gray-400">
        <Search setSearchTerm={setSearchTerm} setSort={setSort} />

        <div className="overflow-auto text-center font-(family-name:Arial, sans-serif, Helvetica) p-5 text-white min-w-sm max-w-6xl bg-gray-100 rounded-lg self-center">
          <CountryList countries={filteredCountries} />
        </div>
      </div>
    </>
  );
}

export default App;
