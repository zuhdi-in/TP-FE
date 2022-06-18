import styled, { css } from "styled-components";
// import { css } from "styled-components";

// const colors = {
//     primary:"#4361ee",
//     secondary: "#b5179e"
// };

const Button = styled.button`
    font-size: 1rem; 
    padding: 1rem 2rem; 
    border: none;
    border-radius: 10px;
    color: #fff;
    margin: 0%;
    text-decoration: none;

    background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"]};

    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}
    ${(props) => props.sm && css`
        font-size: 0.8rem; 
        padding: 0.2rem 0.5rem;
    `}
    ${(props) => props.lg && css`
        font-size: 1.3rem; 
        padding: 0.5rem 1rem;
    `}
    ${(props) => props.md && css`
        font-size: 1rem; 
        padding: 0.5rem 1rem.
    `}
`;


export default Button;