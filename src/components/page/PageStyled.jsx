import { styled } from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  width: 100%;
  height: fit-content;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 10% 5%;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ResultsContainer = styled.div`
display :grid;
grid-template-column:repeat(auto-fill, minmax(200px, 1fr))
grid-gap:20px;
`;

export const SearchInput = styled.input`
  padding: 20px;
  border: 1px solid grey;
  border-radius: 40px;
  background-color: #ffffff66;
  width: 60%;
  height: 130px;
  font-size: 36px;
  outline: none;
  &::placeholder {
    color: #ffffff;
  }

  @media screen and (max-width: 480px) {
    height: 70px;
    width: 100%;
    padding: 5%;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 100%;
    height: 80px;

    &::placeholder {
      font-size: 30px;
    }
  }
`;

export const MovieTitleHolder = styled.div`
  width: 60%;
  height: 200px;
  margin-top: 40px;
  color: #ffffff;

  h1 {
    margin-bottom: 2%;
    font-size: 36px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 60%;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 30px;
  }

  // p {
  //   font-size: 15px;
  //   font-weight: 700;
  //   width: 100%;
  // }
`;

export const MovieContainer = styled.div`
  width: 100%;
  padding: 4%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 480px) {
    margin-top: 10%;
    width: 100%;
    display: block;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    margin-top: 6%;
    padding: 4%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`;
