import React from 'react';
import Chart from './Chart.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dates: [], prices: []};
  }


componentDidMount () {
  axios.get('/bitcoin')
  .then((data) => {
    let dates = Object.keys(data.data);
    let prices = Object.values(data.data);
    this.setState({dates: dates, prices: prices});
  })
  .catch((data) => {
    console.log(error);
  })
}



  render() {
    return (
      <div className="main">
        <h1>
       Cryptocurrency Charting Tool
       </h1>
      <Chart
      dates={this.state.dates}
      prices={this.state.prices}
      />
      </div>
    );
  }
}

export default App;



