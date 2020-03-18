import React from "react";

function SearchingInput(props) {
  return (
    <input
      placeholder={"Search for country..."}
      className={"countries__search"}
      onChange={props.change}
      type="text"
    />
  );
}

export default SearchingInput;
