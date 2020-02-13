import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import ChartRoute from "./components/ChartRoute";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  const [darkMode, setDarkMode] = useDarkMode(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path="/">
        <Charts coinData={coinData} darkMode={darkMode} />
      </Route>
      <Route path="/:id" render={(props) => <ChartRoute {...props} coinData={coinData} darkMode={darkMode} />} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
