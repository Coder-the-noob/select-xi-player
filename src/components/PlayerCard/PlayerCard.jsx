import React from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/report.png";

const PlayerCard = ({player}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-[350px] object-cover"
          src={player.playerImage}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />{" "}
          <h2 className="card-title ml-2">{player.playerName}</h2>
        </div>

        <div className="flex justify-between mt-4 border-b-1 pb-2 border-gray-400">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-2">{player.playerCountry}</span>
          </div>
          <button className="btn">{player.playerRole}</button>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold mb-4">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">{player.battingStyle}</span>
          <span>{player.bowlingStyle}</span>
        </div>
        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: {player.price}</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
