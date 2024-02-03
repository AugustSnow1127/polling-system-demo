import React from 'react'
import { usePollStore } from '../store/usePollStore'
import PollItem from './PollItem'
import { HistoryPollWrapper } from './style'

const HistoryPoll = () => {
  const { pollData, selectingIdx } = usePollStore();
  const [otherPolls, setOtherPolls] = React.useState(null);

  React.useEffect(() => {
    if (pollData) {
      const others = pollData.filter((_, idx) => idx !== selectingIdx);
      setOtherPolls(others);
    }
  }, [pollData, selectingIdx]);

  return (
    <HistoryPollWrapper>
      {otherPolls && otherPolls.map((data) => {
        return <PollItem
          data={data}
        />
      })}
    </HistoryPollWrapper>
  )
}

export default HistoryPoll