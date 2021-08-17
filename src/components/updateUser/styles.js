import styled from "styled-components";

export const Container = styled.div`
  background-color: #e9a2ad;
  border: 2px solid #d3455b;
  padding: 15px;

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
    background-color: #d3455b;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin: 10px auto;
  }
`;
