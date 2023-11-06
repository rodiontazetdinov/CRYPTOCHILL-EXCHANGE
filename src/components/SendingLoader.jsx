import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import newsImg from "../images/news.svg";
import "@splidejs/react-splide/css/core";
import { NewsCard } from "./NewsCard";
import { useRef } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import leftArrow from "../images/slider-arrow-left.svg";
import rightArrow from "../images/slider-arrow-right.svg";
import { Link } from "react-router-dom";

export const SendingLoader = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");

  return (
    <h1>SendingLoader</h1>
  );
};
