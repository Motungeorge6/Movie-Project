import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,body,html {
        box-sizing : border-box;
        margin:0;
        padding:0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 100%;
    height: 50vh;
  }
`;

export const ContainerBackground = styled.div`
  background: ${(backgroundImage) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerGradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 32%,
    rgba(0, 0, 0, 1) 69%
  );
`;

export const LogoHolder = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 2%;

  img {
    width: 230px;
    height: fit-content;
  }

  svg {
    color: white;
    font-size: 100px;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
    padding: 6%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;

    img {
      width: 100px;
    }

    svg {
      font-size: 50px;
      width: fit-content;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    height: 80px;

    img {
      width: 100px;
    }

    svg {
      font-size: 40px;
      width: fit-content;
    }
  }
`;
export default GlobalStyle;
