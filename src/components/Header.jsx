import { Link } from "react-router-dom";
import {  } from "react";

const Header = ({ totalCount}) => {
 let count = totalCount;

 

  return (
    <header className="flex flex-row justify-between bg-red-200  text-xl px-10 py-4 sticky top-0  w-full">
      <button>Country Explorer</button>
      <Link to={"/like/country"}>
        <button className="shadow-xl/30 hover:bg-transparent bg-red-100  border rounded-lg px-2 p-1 self-start">
          Liked Countries
          <span className="px-1 rounded-full border relative bottom-3 left-3 bg-red-200 ">{count}</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
