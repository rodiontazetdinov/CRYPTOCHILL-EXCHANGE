import "@splidejs/react-splide/css/core";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { useSelector } from "react-redux";
import { toKnow } from "../utils/constants";

export const SendingToKnow = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 500px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1440px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");

  const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");

  const coinFrom = useSelector(state => state.order.from);

  const currentCoinToKnow = toKnow.find((item) => item.code === coinFrom.code);

  const createLinkInText = (text) => {
    if (text.indexOf('[') !== -1) {
      const textLink = text.slice(text.indexOf('[') + 1, text.indexOf(']'));
      const [textBeforeLink, textAfterLink] = text.split('[' + textLink + ']');
      const link = textAfterLink.slice(1, textAfterLink.indexOf(')'));
      const textEnd = textAfterLink.slice(textAfterLink.indexOf(')') + 1);
      return (
        <p className="text-base">
          {textBeforeLink.trim()}
          <a className="mx-1 text-blue-200" href={link} target="_blank" rel="noreferrer">{textLink.trim()}</a>
          {textEnd.trim()}
        </p>
      )
      
    }
    return <p className="text-base">{text}</p>;
  }

  return (
    <div className={classNames("flex flex-col bg-order rounded-3xl px-8",{
        'flex-col justify-left  relative': miniSending && !iphone,
        'flex-row mx-auto ': !miniSending,
        "flex-col justify-left relative": iphone,
        "pb-[104px]": desctop,
        "pb-12": !desctop,
      })}>
        <h3 className={classNames(" text-center  font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-8 self-center",{
          "text-3xl font-semibold": iphone,
          "text-5xl font-bold": !iphone,
        })}>Что нужно знать?</h3>
        <ul className="space-y-4 text-left">
            {currentCoinToKnow.listToKnow.map((item) => (
                <li className="flex flex-row space-x-4">
                    <img className={classNames("",{"w-8 h-8": iphone})} src={item.icon} alt="иконка" />
                    <p className="text-base">{createLinkInText(item.text)}</p>
                </li>
            ))}
        </ul>
    </div>
  );
};
