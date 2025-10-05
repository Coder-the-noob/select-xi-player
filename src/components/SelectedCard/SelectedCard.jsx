import React from 'react';

const SelectedCard = ({player, removePlayer}) => {

    const handleRemove = () =>{
        removePlayer(player)
    }
    return (
        <div className='border-2 border-gray-300 p-3 flex justify-between rounded-xl items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-xl' src={player.playerImage} alt="" />

                    <div className='ml-2'>
                        <h1>{player.playerName}</h1>
                        <p className='text-xs'>{player.playerRole}</p>
                    </div>
                </div>

                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/Lh9NHn3y/Frame.png" alt="" />
                </div>

            </div>
    );
};

export default SelectedCard;