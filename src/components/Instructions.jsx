import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import newsImg from "../images/instruct-btc.svg";
import "@splidejs/react-splide/css/core";
import { NewsCard } from "./NewsCard";
import { useRef } from "react";

import leftArrow from "../images/slider-arrow-left.svg";
import rightArrow from "../images/slider-arrow-right.svg";
import { Link } from "react-router-dom";
import { InstructionsItem } from "./InstructionsItem";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const Instructions = () => {
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
      perPage: 2,
      perMove: 1,
      gap: 24,
      arrows: false,
      autoWidth: true,
      height: '100%'
    };
    console.log(iphone, ipadMini, macbook, desctop)
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
        Руководства и инструкции
      </h2>
      <div className="relative">
      {!iphone && <button className=" w-14 mb-8 absolute z-10 top-2/4 left-0" onClick={() => sliderRef.current.splide.go('<')}><img className="w-14 " src={leftArrow} alt="левая срелка слайдера"/></button>}
      <Splide
      ref={sliderRef}
        aria-label="My Favorite Images"
        options={splideOptions}
        hasTrack={ false }
        className={classNames("splide is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active min-w-[1169px] max-w-[1184px] mx-auto", {
          "ml-[72px]": macbook || ipadMini
        })}
        // className="splide is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active"
      >
        <SplideTrack>
        <SplideSlide className={classNames({
          "w-[580px] h-[355px]": desctop,
          "w-[500px] h-[355px]": macbook || ipadMini,
          "w-[302px] h-[387px]": iphone,
        })}>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[580px] h-[355px]": desctop,
          "w-[500px] h-[355px]": macbook || ipadMini,
          "w-[302px] h-[387px]": iphone,
        })}>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[580px] h-[355px]": desctop,
          "w-[500px] h-[355px]": macbook || ipadMini,
          "w-[302px] h-[387px]": iphone,
        })}>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[580px] h-[355px]": desctop,
          "w-[500px] h-[355px]": macbook || ipadMini,
          "w-[302px] h-[387px]": iphone,
        })}>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide className={classNames({
          "w-[580px] h-[355px]": desctop,
          "w-[500px] h-[355px]": macbook || ipadMini,
          "w-[302px] h-[387px]": iphone,
        })}>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
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
        "w-[217px]": ipadMini || macbook
      })}>Читать все</Link>
      </section>
    );
}