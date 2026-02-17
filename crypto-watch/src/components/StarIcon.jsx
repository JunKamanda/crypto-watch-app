import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("coinList");

    if (stored) {
      const favList = stored.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  }, [coinId]);

  const idChecker = (id) => {
    let stored = window.localStorage.getItem("coinList");
    let favList = stored ? stored.split(",") : [];

    if (favList.includes(id)) {
      favList = favList.filter((coin) => coin !== id);
      setLike(false);
    } else {
      favList.push(id);
      setLike(true);
    }

    window.localStorage.setItem("coinList", favList.join(","));
  };

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
