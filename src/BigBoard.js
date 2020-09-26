import React from 'react';

function BigBoard() {

  const [open, setOpen] = useState(false);
 
  return (
    <div className="BigBoard">
        <h1>Big Board</h1>
        <table class="table table-condensed" style="border-collapse:collapse;">
            
          <thead       
                onClick={() => setOpen(!open)} 
                aria-controls="example-collapse-text" 
                aria-expanded={open}>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Height</th>
                <th scope="col">From</th>
                <th scope="col">Image</th>
                </tr>
            </thead>
            <Collapse in={open}>
            <tbody id="example-collapse-text">
                <tr >
                <th scope="row">1</th>
                <td>Deni Avdija</td>
                <td>6-9</td>
                <td>Maccabi Tel Aviv, Israel</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Collapse>
        </table>
    </div>
  );
}


export default BigBoard;
