import styled from "styled-components";

const Input = styled.input`
    border: 2px solid #6FCF97;
    border-radius: 5px;
    color: black;
    width: ${props => props.width ? props.width  : '250px'};
    margin: 1rem;
    padding: 1rem 1.5rem;
    margin-left: 0px;
    heigth : 50px;
`;

export default Input;