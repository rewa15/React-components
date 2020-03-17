import React from "react"; // this is important because we are using plain html inside js, and during compile time react converts the html to js using document.createElement(), etc.

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;
