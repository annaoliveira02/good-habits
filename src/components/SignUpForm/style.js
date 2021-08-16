import styled from "styled-components";
import registerImage from "../../assets/img/registerImage.svg";

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-width: 30vw;
  height: 60vh;
  padding: 30px 0;
  background-color: #ffb479;

  border-radius: 5px;

  .FormTitle {
    color: #fceee0;
    font-weight: bold;
  }

  .ErrorMessage {
    color: #f64825;
    font-size: 10px;
  }

  .linkToLogin {
    font-size: 12px;
  }
`;

export const Breaker = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    background: url(${registerImage}) no-repeat center;
    background-size: contain;
    height: 200px;
    width: 200px;
    background-color: transparent;
    margin-left: 100px;
  }
`;

export const FormInput = styled.input`
  margin: 10px;
  border-radius: 5px;
  border: transparent;
  background-color: #fceee0;
  height: 30px;
  width: 180px;
`;

export const FormButton = styled.button`
  margin: 5px;
  width: 180px;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
  background: #f64825;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;
