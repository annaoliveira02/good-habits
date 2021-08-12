import styled from "styled-components";

export const InitialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fceee0;
  padding: 20px;
  margin: 15px;
  width: 90vw;
  min-height: 70vh;
  margin-block-start: 70px;
  border-radius: 5px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fceee0;
`;

export const MainButton = styled.button`
  margin-inline: 5px;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(247, 133, 55, 1) 0%,
    rgba(246, 72, 37, 1) 100%
  );
  border-radius: 5px;
  color: white;
  font-weight: bold;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(246, 72, 37, 1) 0%,
      rgba(247, 133, 55, 1) 100%
    );
  }
`;
