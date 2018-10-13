import React from "react";
import MonsterCard from "./MonsterCard";
export default ({ monsters, isPending }) => {
  if (isPending)
    return <div className="f2 special-title dark-red">Loading...</div>;

  const monsterslist = monsters.map(monster => (
    <MonsterCard key={monster.id} monster={monster} />
  ));
  return monsterslist;
};
