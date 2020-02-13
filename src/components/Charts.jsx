import React from "react";
import Chart from "./Chart";
import {useHistory} from "react-router";

const Charts = ({ coinData }) => {
  const history = useHistory();
  return (
    <div className="charts">
      {coinData.map((coin, i) => (
        <Chart coin={coin} onClick={() => history.push(`/${i}`)} />
      ))}
    </div>
  );
};
export default Charts;
