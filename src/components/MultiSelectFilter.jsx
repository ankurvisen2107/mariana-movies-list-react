import React from "react";
import Multiselect from "multiselect-react-dropdown";

const MultiselectFilter = ({options, onChange}) => {
  return (
    <Multiselect
      options={options}
      onSelect={onChange} 
      onRemove={onChange}
      displayValue="name"
      placeholder="Filter by Genre"
    />
  );
};

export default MultiselectFilter;
