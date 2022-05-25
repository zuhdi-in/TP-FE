import styled from "styled-components";

const P = styled.p`
    color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"]};
    margin-bottom: 1rem;
`;

export default P;