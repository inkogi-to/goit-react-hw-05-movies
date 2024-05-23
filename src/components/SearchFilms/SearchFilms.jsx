import React from 'react';
import "./search.css"

const SearchFilms = ({ value,updateQuery }) => {
  return (
    <>
      <form className="search"  action="">
        <input type="search" value={value} onChange={updateQuery} placeholder="Search here..." required />
      </form>
    </>
  );
};

export default SearchFilms;
