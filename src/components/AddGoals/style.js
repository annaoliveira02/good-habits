import styled from "styled-components";

export const Container = styled.div`
  background-color: #9dd694;
  border: 2px solid #459638;
  padding: 15px;
  z-index: 1;

  display: flex;
  justify-content: space-around;

  width: 90vw;
  max-width: 700px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin-bottom: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  button {
    font-size: 20px;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    background-color: #6fb864;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin: 10px auto;
  }
`;
