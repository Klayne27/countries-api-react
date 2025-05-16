import { useDispatch, useSelector } from "react-redux";
import { handleToggleDropdown } from "./dataSlice";
import { useEffect, useRef } from "react";

function CustomDropdown({
  id,
  value,
  onChange,
  placeholder,
  allOptionsValue,
  isInteracted,
  options,
}) {
  const { openDropdown } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const isOpen = openDropdown === id;
  const dropDownRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        dispatch(handleToggleDropdown(false));
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, dispatch]);

  let displayText;
  if (!isInteracted && value === allOptionsValue) {
    displayText = placeholder;
  } else if (selectedOption) {
    displayText = selectedOption.name;
  }

  const handleSelect = (value) => {
    onChange(value);
    dispatch(handleToggleDropdown(null));
  };

  return (
    <div ref={dropDownRef}>
      <div
        onClick={() => dispatch(handleToggleDropdown(id))}
        className={`mt-5 md:mt-0 transition-colors flex justify-between w-[210px] cursor-pointer relative text-black dark:text-white rounded-md py-4 px-6 bg-white dark:bg-[#2b3945] shadow-md hover:opacity-80`}
      >
        {" "}
        <span className="md:text-base text-sm">{displayText}</span>
        <svg
          className={`w-4 h-4 transform`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 15"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="transition-colors absolute bg-white dark:bg-[#2b3945] w-[210px] mt-1 rounded-md py-3 shadow-md">
          {options.map((option) => (
            <li
              key={option.name}
              onClick={() => handleSelect(option.value)}
              className="transition-colors text-black dark:text-white cursor-pointer px-6 py-1.5 hover:bg-[#f0f0f0]  dark:hover:bg-[#202c37] md:text-base text-sm"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
