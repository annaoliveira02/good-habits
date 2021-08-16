import styled from 'styled-components';

const ListContainer = styled.li`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    background-color: #EEE;
    margin-bottom: 10px;

    > p {
        flex-basis: 60%;
        font-size: 19px;
    }

    > button {
        flex-basis: 20%;
        font-size: 17px;
        padding: 5px;
        cursor: pointer;
        
    }
`;

export default ListContainer;