import React from 'react';
import Chart from './Chart.jsx';
import axios from 'axios';
import CurrencyForm from './Form.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Bitcoin: {}, Ethereum: {}, Ripple: {}, BitcoinCash: {}, currentCurrency: 'Bitcoin'};
  }


componentDidMount () {
  axios.get('/bitcoin')
  .then((data) => {
    console.log(data.data);
    this.setState({Bitcoin: data.data});
  })
  .catch((error) => {
    console.log(error);
  })
  axios.get('/ethereum')
  .then((data) => {

    this.setState({Ethereum: data.data});
  })
  .catch((error) => {
    console.log(error);
  })
  axios.get('/ripple')
  .then((data) => {

    this.setState({Ripple: data.data});
  })
  .catch((error) => {
    console.log(error);
  })
  axios.get('/bitcoinCash')
  .then((data) => {

    this.setState({BitcoinCash: data.data});
  })
  .catch((error) => {
    console.log(error);
  })
}

submit (currency) {
  let newCurrency = currency;
  if(currency.includes('Bitcoin')) {
    newCurrency = 'Bitcoin';
  }
  if(currency.includes('Ethereum')) {
    newCurrency = 'Ethereum';
  }
  if(currency.includes('Ripple')) {
    newCurrency = 'Ripple';
  }
  if(currency.includes('BitcoinCash')) {
    newCurrency = 'BitcoinCash';
  }
  this.setState({currentCurrency: newCurrency});
}

  render() {
    return (
      <div className="main">
        <h1>
       Cryptocurrency Charting Tool
       </h1>
       <CurrencyForm submit={this.submit.bind(this)}/>
      <Chart
      data={this.state[this.state.currentCurrency]}
      currency={this.state.currentCurrency}
      />
      </div>
    );
  }
}

export default App;



