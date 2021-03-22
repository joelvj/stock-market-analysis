import React from "react";

export default function sm() {
  const apiKey = {
    api: process.env.NEXT_PUBLIC_API_KEY,
  };
  console.log(apiKey.api);
  //   fetch(
  //     "https://api.polygon.io/v2/reference/tickers?sort=ticker&type=cs&market=STOCKS&locale=us&perpage=50&page=1&active=true&apiKey="
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.tickers[0]));

  return <div></div>;
}
