import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

function BigBoard() {

  const data = [
    {name: 'Deni Avdija', age: 19, highet: '6-9', club: 'Maccabi Tel Aviv', image: 'https://sportsrabbi.com/wp-content/uploads/2019/11/4533D68D-203A-4E5D-885B-CBA8897B4EE1.jpeg', id: 1},
    {name: 'Deni Avdija', age: 19, highet: '6-9', club: 'Maccabi Tel Aviv', id: 2}
  ];

  return (
    <div className="BigBoard">
        <h1>Big Board</h1>
        <table class="table table-condensed">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Height</th>
                <th scope="col">From</th>
                <th scope="col">Image</th>
                </tr>
            </thead>
            
                {data.map((player, index) => (
                  <tbody>
                    <tr data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={'#' + index}>
                      <th scope="row">{index + 1}</th>
                      <td>{player.name}</td>
                      <td>{player.highet}</td>
                      <td>{player.club}</td>
                      <td>{'#' + index}</td>
                    </tr>
                    <tr className="collapse" id={`collapse${index}`}>
                      <td colspan="5">
                        <div className="collapse-data">
                          <img src={player.image} alt="" className="player-image" />
                          <ReactPlayer className="youtube" url="https://www.youtube.com/watch?v=SlM6WlHljUw"/>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  )

            )}
        </table>
    </div>
  );
}


export default BigBoard;
