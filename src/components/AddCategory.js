import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const HandleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((category) => [inputValue, ...category]);
      setinputValue("");
    }
  };

  return (
    <form action="" onSubmit={HandleSubmit}>
      <input
        className="inp"
        type="text"
        value={inputValue}
        onChange={HandleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
