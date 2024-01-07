import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import newsImg from "../images/news.png";
import newsImgAnother  from "../images/news.png";
import "@splidejs/react-splide/css/core";
import { NewsCard } from "./NewsCard";
import { useRef } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import leftArrow from "../images/slider-arrow-left.svg";
import rightArrow from "../images/slider-arrow-right.svg";
import { Link } from "react-router-dom";
import { News } from "./News";
import { BlockNews } from "./BlockNews";

export const NewsPage = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
  const desctop = useMediaQuery("only screen and (min-width : 1328px)");
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1280px)"
  );


  const sliderRef = useRef()
  const splideOptions = {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    gap: 16,
    arrows: false,
    autoWidth: true,
  };

  // PROPS или данные или хз
  const title = "Новости криптовалют 4 недели июня 2023 года";
  const description = `“Крупнейшая криптовалютная биржа запускает новую платформу для институциональных инвесторов: $100 млн выделено на поддержку блокчейн-стартапов”
  Одна из крупнейших криптовалютных бирж объявила о запуске специализированной платформы для институциональных инвесторов, ориентированной на блокчейн и криптовалюты. В рамках нового проекта биржа выделит $100 миллионов на финансирование блокчейн-стартапов и развитие индустрии.
  Платформа будет предоставлять инвесторам доступ к различным криптовалютным активам, включая ведущие цифровые валюты, деривативы и NFT. Биржа также планирует активно сотрудничать с другими крупными игроками рынка и способствовать развитию инноваций в сфере криптовалют и блокчейна.
  “Мы видим огромный потенциал в развитии блокчейн-технологий и уверены, что этот рынок будет расти и развиваться стремительными темпами. Наша цель - сделать инвестиции в криптовалюты доступными и безопасными для институциональных игроков, которые стремятся диверсифицировать свои портфели”, - заявил представитель биржи.
  В рамках новой платформы биржа также планирует проводить регулярные мероприятия и конференции, на которых будут обсуждаться актуальные вопросы развития блокчейн-индустрии и возможности для инвестирования в криптовалюты.`;
  const imgLink = newsImg;
  const tags = ['Solana', 'Stellar', 'Lumens', 'Tether', 'TON', 'Toncoin'];

  return (
    <section className={classNames("mx-auto ",{
      "min-w-[1328px] max-w-[1328px]": desctop,
      "max-w-main-container": macbook || laptop,
      "max-w-tablet-container": ipadMini,
      "max-w-mobile-container": iphone,
    })}>
      <h2 className={classNames("text-start font-bold font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-10",{
        "text-4xl": !iphone,
        "text-2xl": iphone,
      })}>
        {title}
      </h2>
      <p className="text-start mt-4">14.12.2023</p>
      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => { return (
          <button
            className=" bg-[#2B23AC] rounded-lg mr-2 px-2 py-1 mb-2 cursor-pointer hover:bg-[#3c31e9]"
          >{tag}</button>
        )})}
      </div>
      <div className={classNames(" mt-4", {
          "w-[960px]": desctop,
          "w-[840px]": macbook,
          "w-full": ipadMini || iphone,
      })}>
        <img
            className={classNames("w-full max-h-[530px] bg-[#976ADE] rounded-2xl", {
                "max-h-[530px]": desctop || macbook,
                "max-h-[460px]": ipadMini,
                "max-h-[380px]": iphone,
            })}
            src={imgLink}
            alt="Картинка к новости"
        />
        <p className={classNames("text-start mt-4 whitespace-pre-line", {
            "text-xl font-semibold": !iphone,
            "text-lg font-normal": iphone,
        })}>
            {description}
        </p>
      </div>
      <h2 className={classNames("text-start font-bold font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-10",{
        "text-4xl": !iphone,
        "text-2xl": iphone,
      })}>
        Читайте также
      </h2>
      <News />
    </section>
  );
};
