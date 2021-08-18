import styled, { keyframes } from "styled-components";

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const HabitsCreatorContainer = styled.form`
  background-color: #ff8c64;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 40vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${AppearSlow};
  animation-duration: 0.2s;

  input {
    min-width: 20vw;
  }

  button {
    background-color: #ffd6b7;
    min-width: 30vw;
    height: 5vh;
    border-radius: 5px;
    border-color: transparent;
  }
`;

export default HabitsCreatorContainer;
