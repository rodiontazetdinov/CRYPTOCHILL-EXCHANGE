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

export const News = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
  const desctop = useMediaQuery("only screen and (min-width : 1328px)");
  const sliderRef = useRef()
  const splideOptions = {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    gap: 16,
    arrows: false,
    autoWidth: true,
  };

  return (
    <section className={classNames("flex flex-col self-center mx-auto",{
      "max-w-[calc(100% - 112px)]": macbook,
      "max-w-[1328px]": desctop,
      "max-w-[696px]": ipadMini,
      "max-w-[696px]": iphone,
    })}>
      <h2 className={classNames("text-center font-bold font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-10 self-center",{
        "text-4xl": !iphone,
        "text-2xl": iphone,
      })}>
        Новости
      </h2>
      <div className="relative">
      {!iphone && <button className=" w-14 mb-8 absolute z-10 top-2/4 left-0" onClick={() => sliderRef.current.splide.go('<')}><img className="w-14 " src={leftArrow} alt="левая срелка слайдера"/></button>}
      <Splide
        ref={sliderRef}
        aria-label="My Favorite Images"
        options={splideOptions}
        hasTrack={ false }
        className={classNames("splide is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active min-w-[1169px] max-w-[1169px] mx-auto", {
          "ml-[72px]": macbook || ipadMini
        })}
      >
        <SplideTrack>
        <SplideSlide className={classNames({
          "w-[379px]": !iphone,
          "w-[302px]": iphone,
        })}>
            <NewsCard
              title={"Новости криптовалют 1 недели июня 2023 года"}
              description={
                "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
              }
              imgLink={newsImg}
            />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[379px] h-[598px]": !iphone,
          "w-[302px] h-[507px]": iphone,
        })}>
          <NewsCard
            title={"Новости криптовалют 2 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[379px] h-[598px]": !iphone,
          "w-[302px] h-[507px]": iphone,
        })}>
          <NewsCard
            title={"Новости криптовалют 3 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[379px] h-[598px]": !iphone,
          "w-[302px] h-[507px]": iphone,
        })}>
          <NewsCard
            title={"Новости криптовалют 4 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[379px] h-[598px]": !iphone,
          "w-[302px] h-[507px]": iphone,
        })}>
          <NewsCard
            title={"Новости криптовалют 5 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        </SplideTrack>
      </Splide>
      {!iphone && <button className="w-14 mb-8 absolute z-10 top-2/4 right-0" onClick={() => sliderRef.current.splide.go('>')}><img className="w-14 " src={rightArrow} alt="левая срелка слайдера"/></button>}
      </div>
      <Link className={classNames("bg-btns mt-6 self-end text-xl font-semibold px-4 py-3 rounded-xl mb-12",{
        "mr-20 w-[217px]": desctop,
        "w-full mr-0": iphone,
        "w-[217px]": macbook || ipadMini
      })}>Читать все новости</Link>
    </section>
  );
};
