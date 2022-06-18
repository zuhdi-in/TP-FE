import styled from "styled-components";

const P = styled.p`
    color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"]};
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
`;

export default P;