import styled from "styled-components";

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;

    div {
        flex-basis: 40%;
    }

    @media (min-width: 992px) {
        margin: 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

`;

export default StyledHero;