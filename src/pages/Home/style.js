import styled from "styled-components";

export const Breaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 40px;
    font-size: 24px;
    font-family: "Nunito", sans-serif;
  }

  .trademark {
    color: rgba(246, 72, 37);
    font-family: 'Flamenco', cursive;
    font-size: 28px;
  }

  .subtitle {
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    margin-bottom: 40px;
  }

  .startButton {
    margin-inline: 3px;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(247, 133, 55, 1) 0%,
      rgba(246, 72, 37, 1) 100%
    );
    border-radius: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Nunito", sans serif;

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(246, 72, 37, 1) 0%,
        rgba(247, 133, 55, 1) 100%
      );
    }
  }

  @media(min-width: 600px) {
    .title {
      font-size: 32px;
    }

    .subtitle {
      font-size: 24px;
      font-weight: 200;
      max-width: 80%;
    }

    .trademark {
      font-size: 39px;
    }

    .
  }
`;
