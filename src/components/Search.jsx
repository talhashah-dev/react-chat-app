import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {
  return (
    <div className="searchContainer">
        <div className="searchForm">
        <FaSearch style={{color: "rgb(184, 184, 184)" , fontSize: "20px", cursor: "pointer"}} />
          <input type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Search
