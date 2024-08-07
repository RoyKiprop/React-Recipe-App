/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/searched/${searchInput}`)
  }

 

  return (
    <form  className="flex justify-center w-full mb-6 mt-2" onSubmit={handleSubmit}>
      <div className="relative w-[50%]">
        <input
          value={searchInput}
          type="text"
          className="bg-black text-white pl-10 pr-4 py-2  focus:outline-none"
          placeholder="Search..."
          onChange={(e) =>setSearchInput(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
        />
      </div>
    </form>
  );
}

export default Search;
