'use client';

import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Item(props: any) {
  return (
    <Paper>
      <img src={props.item.src} alt={props.item.alt} />
      <p>{props.item.caption}</p>
    </Paper>
  );
}

const MovieCarousel = () => {
  const items = [
    {
      src: "https://source.unsplash.com/random",
      alt: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "Slide 3",
      caption: "Slide 3",
    },
  ];

  return (
    <Carousel autoPlay={false} animation="slide">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );

};

export default MovieCarousel;
