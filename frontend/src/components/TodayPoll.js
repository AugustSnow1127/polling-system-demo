import React from 'react'
import { usePollStore } from '../store/usePollStore'
import moment from 'moment'
import DonutChart from './DonutChart'
import {
  PollingListWrapper,
  Title,
  SubTitle,
  TodayDate,
  Label,
  LabelWrapper,
  PollInfo,
  Record,
} from './style'

const TodayPoll = () => {
  const { pollData, setPollData } = usePollStore();
  const [selectingIdx, setSelectingIdx] = React.useState(0);

  React.useEffect(() => {
    if (pollData) {
      console.log('pollData', pollData);
    }
  }, [pollData]);

  return (
    <PollingListWrapper>
      <PollInfo>
        <Title>Today's Poll</Title>
        <SubTitle>
          {pollData && pollData[selectingIdx].title}
          <TodayDate>{pollData && moment(pollData[selectingIdx].publishedDate).format('DD MMM YYYY')}</TodayDate>
        </SubTitle>

        <LabelWrapper>
          {
            pollData && pollData[selectingIdx].answer.options.map((option, index) => {
              return (
                <Label
                  key={index}
                  className={option.label.toLowerCase()}
                  onClick={() => {
                    const newPollData = [...pollData];
                    newPollData[selectingIdx].answer.options[index].count += 1;
                    setPollData(newPollData);
                  }}
                >
                  {option.label}
                </Label>
              )
            })
          }
        </LabelWrapper>

        <Record>Total number of votes recorded: {pollData && pollData[selectingIdx].answer.options.reduce((acc, cur) => acc + cur.count, 0)}</Record>
      </PollInfo>

      <DonutChart currentData={pollData && pollData[selectingIdx].answer.options.map((option) => option.count)} />
    </PollingListWrapper>
  )
}

export default TodayPoll