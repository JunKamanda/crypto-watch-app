import React from "react";
import colors from "../styles/_settings.module.scss";
import { useState, useEffect } from "react";

const PercentChange = ({ percent }) => {
  //STATE
  const [ color, setColor ] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);
  //COMPORTEMENT

  //RENDER
  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? `${percent?.toFixed(2)} %` : "-"}
    </p>
  );
};

export default PercentChange;
