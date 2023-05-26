import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 700px;

  @media screen and (max-width: 480px) {
    margin-bottom: 7%;
    height: 480px;
  }

   @media screen and (min-width: 481px) and (max-width: 960px) {
    height: 420px;
     margin-bottom: 12%;
`;

export const CardImage = styled.div`
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    height: 400px;
  }

   @media screen and (min-width: 481px) and (max-width: 960px) {
    height: 340px;
`;

export const CardTitleHolder = styled.div`
  height: 100px;
  padding: 1% 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;

  @media screen and (max-width: 480px) {
    height: 80px;
  }

   @media screen and (min-width: 481px) and (max-width: 960px) {
    height: 80px;
`;

export const CardInner = styled.div`
  width: 90%;

  h4 {
    font-size: 27px;
  }
  p {
    font-size: 24px;
    margin-top: 1%;
  }

  @media screen and (max-width: 480px) {
    h4 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    h4 {
      font-size: 17px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const TrailerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #fff;
  padding: 20px;
  /* Add other modal styles as needed */
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 400px;
`;
