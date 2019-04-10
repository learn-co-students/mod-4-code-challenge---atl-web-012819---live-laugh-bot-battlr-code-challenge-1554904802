import React from "react";

const Filter = props => {
  return (
    <div id="filter">
      <label htmlFor="type">Filter By Class:</label>
      <select
        name="type"
        id="type"
        onChange={props.handleChange}
        value={props.selected}
      >
        <option value="all">All</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Support">Support</option>
      </select>
    </div>
  );
};

export default Filter;
