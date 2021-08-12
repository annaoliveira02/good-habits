import styled from "styled-components";

export const MenuContainer = styled.div`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;

    @media(max-width: 600px) {
        display: none
    }
`