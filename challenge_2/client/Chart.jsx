import React from 'react';
import {Line} from 'react-chartjs-2';


const Chart = (props) => {

  let currency = props.currency;
  if (currency === 'BitcoinCash') {
    currency = 'Bitcoin Cash';
  }
  const data = {
    labels: props.data.times,
    datasets: [
      {
        label: `${currency} Closing Price`,
        data: props.data.prices,
        backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
    ]
  }
  return (
      <div className="chart">
       <Line data={data} />
      </div>
  )
}

export default Chart;