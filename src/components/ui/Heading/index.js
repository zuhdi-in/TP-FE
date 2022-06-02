import styled from "styled-components";
// import { css } from "styled-components";

// const colors = {
//     primary:"#4361ee",
//     secondary: "#b5179e"
// };

const H1 = styled.h1`
    font-size: 1.8rem;
    /* margin-bottom: 1rem; */
    color: #fff;
`;

const H2 = styled.h2`
    color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"]};
    margin-bottom: 1rem;
    font-size: 2.44rem;
`;

const H3 = styled.h3`
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
`;



export {H1, H2, H3};