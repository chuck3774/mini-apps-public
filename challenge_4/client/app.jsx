import React from 'react';
import axios from 'axios';
import Board from './Board.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }








  render() {
    return (
      <div className="main">
     <h1>
       MineSweeper
      </h1>
     <Board />
      </div>
    );
  }
}

export default App;







