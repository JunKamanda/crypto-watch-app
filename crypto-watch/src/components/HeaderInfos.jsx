import React, { use } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const HeaderInfos = () => {
  //STATE
  const [headerData, setHeaderData] = useState([]);

  
  useEffect(()=>{
     axios.get("https://api.coingecko.com/api/v3/global")
    .then((res)=>setHeaderData(res.data.data));
  },[])
  //COMPORTEMENT

  //RENDER
  return (
    <div className="header-container">
      <h1>HEADER</h1>
    </div>
  );
};

export default HeaderInfos;
