import styled from 'styled-components';

const SubscribeContainer = styled.div`
    width: 90vw;
    max-width: 1000px;
    background-color: #FFF;
    margin: 30px auto;
    max-height:85vh;
    overflow-y: scroll;
    padding: 0 10px 10px;

    > header {
        padding: 10px;
        display:flex;
        justify-content: center;
    }

    > header > input {
        font-size: 19px;
        padding: 5px;
        width: 60%;
        margin-right: 15px;
    }

    > header > svg {
        font-size: 25px;
        cursor: pointer;
        margin-top: 5px;
    }

    > main > p {
        background-color: #EEE;
        padding: 10px;
        text-align: center;
        font-style: italic;
    }

    .no-italic{
        font-style: normal;
    }
`;

export default SubscribeContainer;