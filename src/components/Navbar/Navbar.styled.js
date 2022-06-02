import styled from "styled-components";

const StyledNavbar = styled.nav`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
        color: white;
        text-decoration: none;
    }

    a {
        color: white;
        text-decoration: none;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
        }
    }
`;

export default StyledNavbar;