import React from "react";
import {
  CardContainer,
  CardImage,
  CardTitleHolder,
  CardInner,
} from "./CardStyled";
import { MdFavoriteBorder } from "react-icons/md";

const PictureCard = (props) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={props.image} alt={props.title} />
      </CardImage>
      <CardTitleHolder>
        <CardInner>
          <h4>{props.title}</h4>
          <p>{props.date}</p>
        </CardInner>
        <MdFavoriteBorder style={{ fontSize: "50px" }} />
      </CardTitleHolder>
    </CardContainer>
  );
};

export default PictureCard;
