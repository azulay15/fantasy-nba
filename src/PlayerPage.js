import React from 'react';

function PlayerPage(props) {
  return (
    <div className="playerPage">
        <h1>{props.player.name}</h1>
        <img src={props.player.image} />
    </div>
  );
}

export default PlayerPage;