import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMode } from "./themeSlice";
import { CiLight } from "react-icons/ci";

function Header() {
  const{mode} = useSelector(state => state.theme)
  const dispatch = useDispatch();
  console.log(mode);

  return (
    <div className="px-46 py-5 flex justify-between items-center bg-white  dark:bg-[#2b3945] fixed w-full z-11 shadow-md transition-colors">
      <Link to="/">
        <h1 className="font-bold text-xl text-black dark:text-white transition-colors">
          Where in the world?
        </h1>
      </Link>
      <button
        className="text-md flex gap-2 items-center cursor-pointer"
        onClick={() => dispatch(toggleMode())}
      >
        <span>
          {mode === "dark" ? (
            <MdDarkMode className="text-2xl text-black dark:text-white transition-colors" />
          ) : (
            <CiLight className="text-2xl text-black dark:text-white transition-colors" />
          )}
        </span>
        <p className="text-black dark:text-white transition-colors">
          {mode === "dark" ? "Dark Mode" : "Light Mode"}
        </p>
      </button>
    </div>
  );
}

//<CiLight />

export default Header;
