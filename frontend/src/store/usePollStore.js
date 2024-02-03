import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const PollContext = createContext();

export const usePollStore = () => useContext(PollContext);

export const PollContextProvider = ({ children }) => {
  const [pollData, setPollData] = React.useState(null);

  return (
    <PollContext.Provider
      value={{
        pollData,
        setPollData,
      }}
    >
      {children}
    </PollContext.Provider>
  );
};

PollContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
