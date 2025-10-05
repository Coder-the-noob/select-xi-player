import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({puarchaseddPlayers, removePlayer}) => {
    
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                puarchaseddPlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;