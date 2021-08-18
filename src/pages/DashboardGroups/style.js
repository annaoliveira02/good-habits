import styled from "styled-components"

export const GroupsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    overflow: auto;

    .DashboardTitle {
        font-size: 35px;
        font-family: "Flamenco", cursive;
        width: 100%;
        margin-block: 20px;
    }

    .GroupExplorer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
        background-color: #FFD6B7;
        border-radius: 5px;
    }

    .groupsButton {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding: 12px;
        border-radius: 100px;
        background-color: #FFD6B7;
        font-family: "Nunito", sans-serif;
        font-size: 28px;
        color: white;
        cursor: pointer;
        margin-block-end: 15px;

        &:hover {
            background-color: rgba(247, 133, 55, 1);
            transition: 0.2s;
          }

        @media(min-width: 600px) {
            padding: 24px;
            font-size: 36px;
        }
    }
`