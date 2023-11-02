import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import newsImg from "../images/news.svg";
import "@splidejs/react-splide/css/core";
import { NewsCard } from "./NewsCard";
import { useRef } from "react";

import leftArrow from "../images/slider-arrow-left.svg";
import rightArrow from "../images/slider-arrow-right.svg";
import { Link } from "react-router-dom";

export const News = () => {
  const sliderRef = useRef()
  const splideOptions = {
    type   : 'loop',
    perPage: 3,
    gap: 16,
    arrows: false,
    // arrowPath: `url(${leftArrow}) left center, url(${rightArrow}) right center`
  };
  return (
    <section className="flex flex-col max-w-1328 self-center px-16">
      <h2 className="text-center font-bold text-4xl font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-10 self-center">
        Новости
      </h2>
      <div className="relative">
      <button className="mb-8 absolute z-10 top-2/4 -left-16" onClick={() => sliderRef.current.splide.go('<')}><img src={leftArrow} alt="левая срелка слайдера"/></button>
      <Splide
      ref={sliderRef}
        aria-label="My Favorite Images"
        options={splideOptions}
        hasTrack={ false }
        // className="splide is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active"
      >
        <SplideTrack>
        <SplideSlide>
          <NewsCard
            title={"Новости криптовалют 1 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <NewsCard
            title={"Новости криптовалют 2 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <NewsCard
            title={"Новости криптовалют 3 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <NewsCard
            title={"Новости криптовалют 4 недели июня 2023 года"}
            description={
              "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации."
            }
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
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
      <button className="mb-8 absolute z-10 top-2/4 -right-16" onClick={() => sliderRef.current.splide.go('>')}><img src={rightArrow} alt="левая срелка слайдера"/></button>
      </div>
      <Link className="bg-btns w-[217px] mt-6 self-end mr-3 text-xl font-semibold px-4 py-3 rounded-xl mb-12">Читать все новости</Link>
    </section>
  );
};
