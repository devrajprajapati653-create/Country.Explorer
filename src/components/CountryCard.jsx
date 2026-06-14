function CountryCard({ country }) {
  return (
    <div className="min-w-60 max-w-75 bg-white rounded-lg border border-black shadow-blue-300">
      <div>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-full h-40 object-cover relative z-0"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 text-black">
        <h2 className="text-xl self-center font-bold">{country.name.common}</h2>
        <p>
          <span className="pr-2">population:</span>
          {country.population.toLocaleString()}
        </p>
        <p>
          <span className="pr-2">Region:</span>
          {country.region}
        </p>
        <p>
          <span className="pr-2">Capital:</span>
          {country.capital}
        </p>
        <button className="bg-blue-700 text-sky-100 font-bold p-2 px-6 rounded self-center">
          Explore
        </button>
      </div>
    </div>
  );
}

export default CountryCard;
