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
  align-items: flex-start;
  text-align: center;
  background-color: #fceee0;
  padding: 20px;
  margin: 15px;
  width: 90vw;
  min-height: 70vh;
  max-height: 70vh;
  margin-block-start: 70px;
  border-radius: 5px;
  overflow: auto;
`;

export const MainButton = styled.button`
  margin-inline: 3px;
  cursor: pointer;
  padding: 8px;
  border: none;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(247, 133, 55, 1) 0%,
    rgba(246, 72, 37, 1) 100%
  );
  border-radius: 50px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  font-family: "Nunito", sans serif;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(246, 72, 37, 1) 0%,
      rgba(247, 133, 55, 1) 100%
    );
  }
`;

export const ModalBackground = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  min-width: 30%;
  display: ${({ show }) => (show ? "block" : "none")};
  padding: 15px;
  background-color: white;
  border-radius: 5px;
`;
