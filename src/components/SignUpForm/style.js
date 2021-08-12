import styled from "styled-components";
import registerImage from "../../assets/img/registerImage.png";

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-width: 25vw;
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
`;

export const ImageContainer = styled.div`
  display: flex;
  background-image: url(${registerImage});
  height: 200px;
  width: 200px;
  background-color: transparent;
`;

export const FormInput = styled.input`
  margin: 10px;
  border-radius: 5px;
  border: transparent;
  background-color: #fceee0;
  height: 30px;
  width: 20vw;
`;

export const FormButton = styled.button`
  margin: 5px;
  width: 20vw;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
  background: #f64825;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;
