import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [puarchaseddPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) => {
      const filterData = puarchaseddPlayers.filter(ply=> ply.playerName !== p.playerName)
      console.log(filterData)
      setPurchasedPlayers(filterData)
      setAvailableBalance(availableBalance+p.price.split("$").join("").split(",").join(""))
  }
  
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">{
          
              toggle === true?"Available Players" : `Selected Players (${puarchaseddPlayers.length}/6)`    
          
          }</h1>
        <div className="font-bold">
          <button onClick={()=> setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true? "bg-[#E7FE29]":""}`}>
            Available
          </button>
          <button onClick={()=> setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false?"bg-[#E7FE29]":""}`}>
            Selected<span>({puarchaseddPlayers.length})</span>{" "}
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
        <AvailablePlayers puarchaseddPlayers={puarchaseddPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers removePlayer={removePlayer} puarchaseddPlayers={puarchaseddPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
