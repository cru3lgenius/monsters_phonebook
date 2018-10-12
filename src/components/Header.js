import React from "react";

export default ({ handleChange }) => {
  return (
    <div className="pa2">
      <h1 className="f1 special-title light-green">Monsters Phone Book</h1>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search for a monster..."
        onChange={handleChange}
      />
    </div>
  );
};
