import React from 'react'
import TodayPoll from '../../components/TodayPoll'
import HistoryPoll from '../../components/HistoryPoll'
import axios from 'axios'
import { usePollStore } from '../../store/usePollStore'

const PollingList = () => {
  const { setPollData } = usePollStore();

  const getPollingData = async () => {
    axios.get("http://localhost:3001/api")
      .then(response => {
        const data = response.data.polls.sort((a, b) => b.publishedDate - a.publishedDate);
        console.log('data', data);
        const newData = data.map((poll) => {
          return {
            ...poll,
            answer: {
              ...poll.answer,
              options: poll.answer.options.map((option) => {
                return {
                  ...option,
                  count: 1,
                }
              })
            }
          }
        });
        setPollData(newData);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  React.useEffect(() => {
    getPollingData();
  }, []);

  return (
    <div>
      <TodayPoll />
      <HistoryPoll />
    </div>
  )
}

export default PollingList