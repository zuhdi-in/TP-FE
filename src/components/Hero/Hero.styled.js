import styled from "styled-components";

const StyledHero = styled.section`
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 50px;

    div {
        flex-basis: 40%;
    }

    p {
        margin-bottom: 2rem;
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