"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState<String>("");
  const handlesubmit = () => {
    console.log("subbmitted");
  };
  return (
    <>
      <form onSubmit={handlesubmit} className="searchbar">
        <div className="searchbar__item">
          <SearchManufacturer state={manufacturer} setstate={setmanufacturer} />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
