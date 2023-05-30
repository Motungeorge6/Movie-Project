import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerGradient,
  ContainerBackground,
  LogoHolder,
} from "../../GlobalStyle";
import Logo from "../../assets/imdblogo-5893ddf0.png";
import { MdFavorite } from "react-icons/md";
import {
  MovieContainer,
  MovieTitleHolder,
  SearchContainer,
  SearchInput,
} from "./PageStyled";
import Card from "../card/Card";
import CardData from "../card/CardData";
import { Modal, Typography, Box } from "@mui/material";

const Page = ({ data }) => {
  //   const randomData = CardData[randomIndex];

  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    const dataLength = CardData.length;
    const randomIndex = Math.floor(Math.random() * dataLength);
    const selectedImage = CardData[randomIndex];
    setRandomData(selectedImage);
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  //Search Function
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );

    setSearchResults(filteredMovies);
    setIsSearching(searchTerm !== "");
  };

  return (
    <>
      <Container>
        {randomData && (
          <ContainerBackground key={randomData.id}>
            <img src={randomData.image} alt={randomData.id} />
          </ContainerBackground>
        )}
        <ContainerGradient>
          <LogoHolder>
            <img src={Logo} alt="Logo" />
            <MdFavorite onClick={handleOpen} />
          </LogoHolder>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search For Your Favorite"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {randomData && (
              <MovieTitleHolder>
                <h1>{randomData.title}</h1>
                <p> {randomData.detail}</p>
              </MovieTitleHolder>
            )}
          </SearchContainer>
        </ContainerGradient>
      </Container>
      <MovieContainer>
        {searchTerm.length === 0
          ? // Render the initial movie cards if the search term is empty
            CardData.map((data) => (
              <Card
                key={data.id}
                image={data.image}
                title={data.title}
                date={data.date}
              />
            ))
          : // Render the search results if the search term is not empty
            searchResults.map((data) => (
              <Card
                key={data.id}
                image={data.image}
                title={data.title}
                date={data.date}
              />
            ))}
      </MovieContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 600,
            height: "100vh",
            backgroundColor: "white",
            position: "absolute",
            right: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography
              onClick={handleClose}
              sx={{ fontSize: "24px", cursor: "pointer" }}
            >
              x
            </Typography>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Page;
