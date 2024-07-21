import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  const sortBy = searchParams.get("sortBy") || "";
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
