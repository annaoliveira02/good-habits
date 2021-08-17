import styled from "styled-components";

export const ActivityBox = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    background-color: white;
    width: 100%;
    color:black;

    .activityTitle {
        margin-inline-end: 5px;
    }

    .activityButtons {
        display: flex;
        align-items: center;

        button {
            border-radius: 50px;
            border: none;
            outline: none;
            padding: 3px 4px;
            margin-inline-start: 3px;
            background-color: #458752;
            color: white;
            font-size: 14px;
            cursor: pointer;
        }
    }
`