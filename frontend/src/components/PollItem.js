import React from 'react'
import { PollItemWrapper, TodayDate, SubTitle, PollItemInfo, DonutChartItemWrapper } from './style'
import DonutChart from './DonutChart'
import moment from 'moment'
import { usePollStore } from '../store/usePollStore'

const PollItem = ({data}) => {
  console.log('PollItem', data);
  const { setselectingIdx } = usePollStore();

  const changePoll = () => {
    setselectingIdx(data.id - 1);
  };

  return (
    <PollItemWrapper onClick={changePoll}>
      <DonutChartItemWrapper>
        <DonutChart
          isSmall
          currentData={data.answer.options.map((option) => option.count)}
        />
      </DonutChartItemWrapper>
      <PollItemInfo>
        <TodayDate style={{fontSize: 18, margin: 0}}>{data && moment(data.publishedDate).format('DD MMM YYYY')}</TodayDate>
        <SubTitle style={{fontSize: 18}}>{data && data.title}</SubTitle>
      </PollItemInfo>
    </PollItemWrapper>
  )
}

export default PollItem