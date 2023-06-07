import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const FavoritesModal = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 20px;
`;
export const FavoriteMovie = styled.div`
  /*  styles for individual movie items */
`;
