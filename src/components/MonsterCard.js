import React from "react";

export default ({ monster }) => {
  return (
    <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${monster.id}?set=set2`} alt="" />
      <h2 className="baskerville">{monster.name}</h2>
      <p className="code">{monster.phone}</p>
    </div>
  );
};
