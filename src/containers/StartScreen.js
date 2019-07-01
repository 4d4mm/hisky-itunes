import React from "react";

const StartScreen = () => (
  <form action="/search" method="get">
    <input type="text" name="query" placeholder="Search on itunes" />
    <button>Search</button>
  </form>
);

export default StartScreen;
