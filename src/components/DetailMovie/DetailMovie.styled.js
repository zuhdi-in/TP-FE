import styled from "styled-components";

const StyledDetailMovie = styled.div`
  // Mobile Screen
  padding: 3rem 0;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  text-align: center;
  h2 {
    margin-bottom: 0.5rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }
  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 40%;
    }
    .info {
      flex-basis: 50%;
    }
  }
  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;

export default StyledDetailMovie;