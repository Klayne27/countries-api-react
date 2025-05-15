import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "./CustomDropdown";
import { regionOptions } from "./data/filterOptions";
import { setSelectedRegion } from "./dataSlice";

function Filter() {
  const { selectedRegion, isRegionInteracted } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    dispatch(setSelectedRegion(value));
  };

  return (
    <div>
      <CustomDropdown
        id="region"
        value={selectedRegion}
        onChange={handleRegionChange}
        placeholder="Filter by Region"
        allOptionsValue="All"
        isInteracted={isRegionInteracted}
        options={regionOptions}
      />
    </div>
  );
}

export default Filter;
