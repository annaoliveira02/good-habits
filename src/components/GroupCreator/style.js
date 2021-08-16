import styled, { keyframes } from 'styled-components';

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;


const GroupCreaterContainer = styled.form`
    background-color: #E9A2AD;
    border: 2px solid #D3455B;
    padding: 15px;

    display: flex;
    justify-content: space-around;

    width: 90vw;
    max-width: 700px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: ${AppearSlow};
    animation-duration: .2s;

    > section:first-child {
        display:flex;
        flex-direction: column;
        justify-content: space-around;

        > h3 {
            font-size: 22px;
            text-align: left;
            padding-left: 10px;
        }

        > input {
            padding: 5px;
            font-size: 18px;
            margin: 15px 0 15px 10px;
            margin-left: 10px;
        }

        > input + span {
            padding-left: 10px;
            color: red;
            font-size: 14px;
            margin-top: -14px;
        }
    }

    > section + section {
        padding: 0 10px;
        > p {
            font-size: 18px;
        }

        > div {
            display:flex;
            margin: 20px 0 25px;
        }

        > div > p {
            font-size: 18px;
            margin: 0 10px;
            cursor: pointer;

            .health {
                color: #6558F5;
                border: ${props => props.selectedArray[0] === 1 ? '3px solid #6558F5' : 'none'}
            }

            .study {
                color: #E8833A;
                border: ${props => props.selectedArray[1] === 1 ? '3px solid #E8833A' : 'none'}
            }

            .work {
                color: #35AE9F;
                border: ${props => props.selectedArray[2] === 1 ? '3px solid #35AE9F' : 'none'}
            }
        }

        > div > p > svg {
            padding: 5px; 
            font-size: 47px;
        }

        > button {
            font-size: 20px;
            padding: 10px 30px;
            border: none;
            border-radius: 5px;
            background-color: #D3455B;
            color: #FFF;
            font-weight: bold;
            cursor: pointer;
            margin: 0 auto;
        }

    }

    > svg {
        cursor: pointer;
    }

`;

export default GroupCreaterContainer;