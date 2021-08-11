import styled from "styled-components";

export const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 30px 0;
    background-color: #FFD6B7;
    position: absolute;
    top: 0;
    left: 0;

    .HeaderLogo {
        margin-inline-start: 15px;
        cursor: pointer;
    }

    .HeaderButtons {
        margin-inline-end: 15px;
    }
`