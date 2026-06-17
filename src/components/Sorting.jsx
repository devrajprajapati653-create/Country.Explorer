import {} from "react";

const Sorting = ({ setSort }) => {
  function Sorting(event) {
    setSort(event.target.value);
  }

  return (
    <div className="flex items-center justify-center rounded-3xl border border-gray-800 w-full mb-5">
      <select
        onChange={Sorting}
        className=" text-center text-xl w-1/2 px-4 py-2"
      >
        <option value="">Default Sort</option>
        <optgroup label="population">
          <option value="low to High">Low to High:</option>
          <option value="High to Low">High to Low:</option>
        </optgroup>
        <optgroup label="region">
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Sorting;
