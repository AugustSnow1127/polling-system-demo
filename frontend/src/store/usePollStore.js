import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const PollContext = createContext();

export const usePollStore = () => useContext(PollContext);

export const PollContextProvider = ({ children }) => {
  const [pollData, setPollData] = React.useState(null);
  const [selectingIdx, setselectingIdx] = React.useState(0);

  return (
    <PollContext.Provider
      value={{
        pollData,
        setPollData,
        selectingIdx,
        setselectingIdx,
      }}
    >
      {children}
    </PollContext.Provider>
  );
};

PollContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
