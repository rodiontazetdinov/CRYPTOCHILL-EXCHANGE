import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import plus from "../images/faq-plus.svg";
import minus from "../images/faq-minus.svg";

export const FaqSeqtionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1280px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");
  return (
    <div className="flex flex-row items-center mb-4">
      <div
        className="flex flex-col justify-start text-left w-full"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3
          className={classNames("font-bold mb-1", {
            "text-xl font-semibold": iphone,
            "text-3xl font-bold": !iphone,
          })}
        >
          {question}
        </h3>
        {isOpen && <p className="text-base">{answer}</p>}
      </div>
      <button className="w-12 h-12" type="button">
        <img
          className={classNames("cursor-pointer", {
            "w-8 h-8": iphone,
            "w-12 h-12": !iphone,
          })}
          src={isOpen ? minus : plus}
          alt="иконка переключения секции FAQ"
          onClick={() => setIsOpen((prev) => !prev)}
        ></img>
      </button>
    </div>
  );
};
