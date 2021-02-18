import React from 'react';
import {Line} from 'react-chartjs-2';


const Chart = (props) => {
  const data = {
    labels: props.dates,
    datasets: [
      {
        label: 'Bitcoin Closing Price',
        data: props.prices,
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