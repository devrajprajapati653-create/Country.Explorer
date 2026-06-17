import {Link} from 'react-router-dom'

function CountryCard({ country }) {
  return (
  <Link to={`/country/${country.ccn3}`}>
    <div className="shadow-blue-400 shadow-xl/30 min-w-20 max-w-75 bg-white rounded-lg border border-black ">
      <div>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col items-start gap-1 text-black">
        <h2 className="text-xl self-center font-bold">{country.name.common}</h2>
        <p>population:
          <span className="pl-2">{country.population.toLocaleString()}</span>
          
        </p>
        <p>Region:
          <span className="pl-2">{country.region}</span>
          
        </p>
        <p>Capital:
          <span className="pl-2">{country.capital}</span>
          
        </p>
      </div>
    </div>
  </Link>
  );
}

export default CountryCard;
