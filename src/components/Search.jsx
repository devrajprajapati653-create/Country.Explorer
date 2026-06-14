import {} from 'react';
import Sorting from './Sorting';

function Search({setSearchTerm, setSort}) {
    function Search(event) {
        setSearchTerm(event.target.value.toLowerCase());
    }
    
  return (
    <>
      <div className="flex gap-5 text-center self-center w-full sticky top-16  text-gray-800 min-w-sm max-w-4xl">
        <input
          type="text"
          onInput={Search}
          placeholder="SEARCH ?"
          className="text-center text-xl rounded-full p-4 border border-gray-800 w-full mb-5"
        />
        <Sorting setSort={setSort}/>
      </div>
    </>
  );
}

export default Search;
