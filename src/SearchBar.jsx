import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./dataSlice";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar() {
  const { searchTerm } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleSetSearchTerm = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex items-center rounded-md bg-white  dark:bg-[#2b3945] mb-7 shadow-md transition-colors">
      <FaMagnifyingGlass className="text-[#111517] dark:text-white ml-8 transition-colors" />

      <input
        className="dark:bg-[#2b3945] bg-white px-6 py-4 rounded-md w-[420px] text- flex-grow  border-none focus:outline-none transition-colors placeholder-[#111517] dark:placeholder-gray-400 text-gray-200 shadow-"
        value={searchTerm}
        onChange={handleSetSearchTerm}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
