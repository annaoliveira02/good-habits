import styled from "styled-components";

export const DashboardMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .DashboardTitle {
        font-size: 35px;
        font-family: "Flamenco", cursive;
        width: 100%;
        margin-block: 20px;
    }

    .mainHabits {
        width: 100%;
        min-height: 30vh;
        margin: 5px;
        border-radius: 5px;
    }

    .mainGroups {
        width: 100%;
        min-height: 30vh;
        margin: 5px;
        border-radius: 5px;
    }
`