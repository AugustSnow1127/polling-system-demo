import styled from 'styled-components';

export const PollingListWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid red;
`;

export const PollInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 28px;
  height: auto;
  padding: 0px;
  margin: 0px;
  color: #26658F;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: black;
  `;

export const TodayDate = styled.span`
  margin-left: 10px;
  color: #26658F;
`;

export const Label = styled.div`
  width: auto;
  height: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;

  &.yes {
    background-color: #E57435;
  }

  &.no {
    background-color: #133B6B;
  }
`;

export const LabelWrapper = styled.div`
  margin: 200px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // flex-direction: column;
  flex-wrap: wrap;
  width: 500px;
`;

export const Record = styled.div`
  color: black;
  font-size: 20px;
`;

export const DonutChartWrapper = styled.div`
  flex: 1.5;

  &.small {
    width: 100px;
    height: 100px;
  }
`;

export const HistoryPollWrapper = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const PollItemWrapper = styled.div`
// border: 1px solid red;

  padding: 20px;
  width: 50%;
  height: 150px;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PollItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
  text-align: left;
`;

export const DonutChartItemWrapper = styled.div`
  width: 100px;
`; 