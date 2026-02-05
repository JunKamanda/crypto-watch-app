import React, { use } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
  //STATE
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  }, []);
  //COMPORTEMENT

  //RENDER
  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="Logo" /> Crypto Tower
          </h1>
        </li>
        <li>
          Crypto-monnaie :{" "}
          {headerData?.active_cryptocurrencies?.toLocaleString("fr-Fr") ??
            "chargement ..."}
        </li>
        <li>
          Marchés : {headerData?.markets?.toLocaleString() ?? "chargement ..."}
        </li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          <PercentChange
            percent={headerData?.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC dominance :
          {headerData?.market_cap_percentage?.btc?.toFixed(2) ??
            "chargement ..."}
          %
        </li>
        <li>
          ETH dominance :
          {headerData?.market_cap_percentage?.eth?.toFixed(2) ??
            "chargement ..."}
          %
        </li>
      </ul>
      <TableFilters/>
    </div>
  );
};

export default HeaderInfos;
