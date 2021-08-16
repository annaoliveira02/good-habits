import styled from "styled-components";

export const FooterMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 15px 0;
    background-color: #FFD6B7;
    font-family: "Nunito", sans-serif;
    position: absolute;
    bottom: 0;
    left: 0;

    .FooterSignature {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-inline: 8px;
        font-size: 10px;
    }

    .FooterLinks {
        display:flex;
        justify-content: center;
        align-items: center;
    }

    a {
        margin-inline: 8px;
        font-size: 10px;
    }
`