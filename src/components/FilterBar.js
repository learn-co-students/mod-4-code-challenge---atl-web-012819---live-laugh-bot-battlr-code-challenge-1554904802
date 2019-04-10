import React from 'react'

export default function FilterBar(props) {
  return (
    <div>
      <h4>Filter by type:</h4>
      <select onChange={props.handleFilter} value={props.filterType}>
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Defender">Defender</option>
        <option value="Assault">Assault</option>
      </select>
    </div>
  )
}
