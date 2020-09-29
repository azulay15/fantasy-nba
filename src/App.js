import React from 'react';
import './App.css';
import BigBoard from './BigBoard';
import BigBoardNextYear from './BigBoardNextYear';
import MockDraft from './MockDraft';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const data = [
    {name: 'Deni Avdija', age: 19, highet: '6-9', club: 'Maccabi Tel Aviv', image: 'https://sportsrabbi.com/wp-content/uploads/2019/11/4533D68D-203A-4E5D-885B-CBA8897B4EE1.jpeg', id: 1},
    {name: 'Deni Avdija', age: 19, highet: '6-9', club: 'Maccabi Tel Aviv', image: 'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fpistonpowered.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1144130142.jpeg', id: 2}
  ];

  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />;
              <Route path="/bigBoard"  component={BigBoard} />
              <Route path="/mockDraft"  component={MockDraft} />
              <Route path="/bigBoardNextYear"  component={BigBoardNextYear} />
            </Switch>

        </div>  
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>

);

export default App;
