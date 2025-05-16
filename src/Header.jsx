import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMode } from "./themeSlice";
import { CiLight } from "react-icons/ci";

function Header() {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`px-4 py-6 md:px-46 md:py-5 flex justify-between items-center bg-white  dark:bg-[#2b3945] w-full z-11 shadow-md transition-colors fixed`}
    >
      <Link to="/">
        <h1 className="font-bold text-sm md:text-xl text-black dark:text-white transition-colors">
          Where in the world?
        </h1>
      </Link>
      <button
        className="text-md flex gap-2 items-center cursor-pointer"
        onClick={() => dispatch(toggleMode())}
      >
        <span>
          {mode === "dark" ? (
            <MdDarkMode className="text-sm md:text-2xl text-black dark:text-white transition-colors" />
          ) : (
            <CiLight className="text-sm md:text-2xl text-black dark:text-white transition-colors" />
          )}
        </span>
        <p className="text-black dark:text-white transition-colors text-sm md:text-base">
          {mode === "dark" ? "Dark Mode" : "Light Mode"}
        </p>
      </button>
    </div>
  );
}

export default Header;
