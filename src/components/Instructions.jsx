import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import newsImg from "../images/instruct-btc.svg";
import "@splidejs/react-splide/css/core";
import { NewsCard } from "./NewsCard";
import { useRef } from "react";

import leftArrow from "../images/slider-arrow-left.svg";
import rightArrow from "../images/slider-arrow-right.svg";
import { Link } from "react-router-dom";
import { InstructionsItem } from "./InstructionsItem";

export const Instructions = () => {
    const sliderRef = useRef()
    const splideOptions = {
      type   : 'loop',
      perPage: 2,
      gap: 16,
      arrows: false,
      // arrowPath: `url(${leftArrow}) left center, url(${rightArrow}) right center`
    };
    return (
        <section className="flex flex-col max-w-1328 self-center px-16">
      <h2 className="text-center font-bold text-4xl font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-10 self-center">
        Руководства и инструкции
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
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        <SplideSlide>
          <InstructionsItem
            title={"Криптовалютные кошельки. Особенности и преимущества"}
            description={"Что такое кошелек для криптовалют? Каждый начинающий пользователь криптовалют обязательно сталкивался с вопросами \"Где хранить монеты? Какой кошелек лучше?\". Понятие \"лучший\" в этой ситуации очень относительное, ведь всё зависит от ваших целей и задач, которые вы ставите перед кошельком. Каждый кошелек имеет два уникальных идентификатора: адрес и приватный ключ."}
            imgLink={newsImg}
          />
        </SplideSlide>
        </SplideTrack>
      </Splide>
      <button className="mb-8 absolute z-10 top-2/4 -right-16" onClick={() => sliderRef.current.splide.go('>')}><img src={rightArrow} alt="левая срелка слайдера"/></button>
      </div>
      <Link className="bg-btns w-[217px] mt-6 self-end mr-3 text-xl font-semibold px-4 py-3 rounded-xl mb-20">Читать все новости</Link>
      </section>
    );
}