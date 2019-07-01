import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartScreen from "./containers/StartScreen";
import SearchResultsScreen from "./containers/SearchResultsScreen";
import DetailsScreen from "./containers/DetailsScreen";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={StartScreen} />
        <Route path="/search/" component={SearchResultsScreen} />
        <Route path="/details/:trackId" component={DetailsScreen} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
