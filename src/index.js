import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartScreen from "./containers/StartScreen";
import SearchResultsScreen from "./containers/SearchResultsScreen";
import DetailsScreen from "./containers/DetailsScreen";
import configureStore from "./store/configureStore";
import "./styles.css";

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Route path="/" exact component={StartScreen} />
            <Route path="/search/" component={SearchResultsScreen} />
            <Route path="/details/:trackId" component={DetailsScreen} />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
