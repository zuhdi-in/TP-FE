import styled from "styled-components";
// import { css } from "styled-components";

// const colors = {
//     primary:"#4361ee",
//     secondary: "#b5179e"
// };

const Container = styled.div`
    /* padding: 1rem; */
    /* max-width: 1500px; */
    /* width: 1200px; */
    padding: 1.5rem 1rem;
    background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"]};

    @media (min-width: 768px) {
        padding:1rem 7rem;
    }
`;


export default Container;