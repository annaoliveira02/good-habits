import styled, { keyframes } from "styled-components";

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const FaqContainer = styled.div`
  background-color: #ffcca6;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 50vw;
  max-width: 90vw;
  height: 90vh;
  overflow-y: scroll;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${AppearSlow};
  animation-duration: 0.4s;
  font-family: "Flamenco", cursive;

  h3 {
    margin-block: 10px;
    font-family: "Flamenco", cursive;
  }

  h4 {
    font-weight: normal;
  }

  &:hover {
    background-color: #f2d2b6;

    transition: 0.2s;
  }
`;

export default FaqContainer;
