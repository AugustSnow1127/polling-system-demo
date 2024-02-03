import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DonutChartWrapper } from './style'

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = (props) => {
  const { currentData, isSmall, style } = props;

  // use small to control if hide lagend
  const options = {
    plugins: {
      legend: {
        display: !isSmall,
      },
    },
  };

  const data = {
    labels: ['YES', 'NO'],
    datasets: [
      {
        label: '# of Votes',
        data: currentData,
        backgroundColor: [
          '#E57435',
          '#133B6B',
          '#6E7B8B',
          '#43A047',
          '#D32F2F',
          '#FFC107',
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <DonutChartWrapper className={isSmall && "small"} style={style}>
      <Doughnut data={data} options={options}/>
    </DonutChartWrapper>
  )
}

export default DonutChart