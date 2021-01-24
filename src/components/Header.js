import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
      <h2>Click on Name to sort in alphabetical order or use the search box to narrow your results</h2>
    </header>
  );
}

export default Header;