import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";


const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance, puarchaseddPlayers, setPurchasedPlayers }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3">
      {playerData.map((player) => (
        <PlayerCard puarchaseddPlayers={puarchaseddPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player ={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
