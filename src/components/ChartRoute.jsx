import React from "react";
import Chart from "./Chart";

function ChartRoute({match: {params: {id}}, coinData}) {
  const coin = coinData[parseInt(id)];
  if (!coin) return <div>Loading...</div>;
  return <Chart coin={coin} />;
}

export default ChartRoute;
