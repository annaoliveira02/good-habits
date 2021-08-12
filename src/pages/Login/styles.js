import styled, { keyframes } from "styled-components";
import imgLogin from "../../assets/img/loginImage.svg";

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translate(50px);
}
to {
    opacity:1;
    transform: translateX(0px)
}
`;
const showUp = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 800px) {
    width: 400px;
    height: 400px;
    background: url(${imgLogin}) no-repeat center;
    background-size: contain;
    animation: ${showUp} 2s;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  /* background: #DEBBA0 */
  form {
    margin: 30px 0;
    width: 280px;
    text-align: center;
  }
  button {
    margin-top: 15px;
    width: 280px;
    height: 40px;
    background-color: rgba(246, 72, 37, 1);
    border-radius: 10px;
    border-style: none;
    font: "Roboto";
    font-size: 25px;
    color: #ffffff;
  }
  a {
    font-weight: bold;
    color: rgba(246, 72, 37, 1);
    text-decoration: none;
    font-size: 18px;
  }
  p {
    margin-top: 15px;
    font-size: 18px;
  }
`;
