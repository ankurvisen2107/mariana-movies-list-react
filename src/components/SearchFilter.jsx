import React from "react";

const SearchFilter = ({onChange}) => {
    return(
        <label>
        Search By Title: <input name="searchInput" onChange={e => onChange(e.target.value)}/>
      </label>
    )
}

export default SearchFilter;