import React, { useState } from "react";
import { ModalOverlay } from "./ModalStyled";
import { ContainerBackground } from "../../GlobalStyle";
import { FavoriteMovie, FavoritesModal } from "./ModalStyled";

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const favorites = ["Movie 1", "Movie 2", "Movie 3"]; // Replace with your favorite movies

  const handleFavoritesClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ContainerBackground>
      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <FavoritesModal>
            {favorites.map((movie, index) => (
              <FavoriteMovie key={index}>{movie}</FavoriteMovie>
            ))}
          </FavoritesModal>
        </ModalOverlay>
      )}
      <button onClick={handleFavoritesClick}>Show Favorites</button>
      {/* Rest of your component */}
    </ContainerBackground>
  );
};
export default MyComponent;
