import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DonutChartWrapper } from './style'

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = (props) => {
  const { currentData } = props;

  const data = {
    labels: ['YES', 'NO'],
    datasets: [
      {
        label: '# of Votes',
        data: currentData,
        backgroundColor: [
          '#E57435',
          '#133B6B',
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <DonutChartWrapper>
      <Doughnut data={data} />
    </DonutChartWrapper>
  )
}

export default DonutChart