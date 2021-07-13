import styled from "styled-components";

const Button = styled.button`
    background: #6FCF97;
    border: 2px solid #6FCF97;
    border-radius: 5px;
    color: #FDFDFD;
    width: ${props => props.width ? props.width  : '100px'};
    margin: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;

`;

export default Button;