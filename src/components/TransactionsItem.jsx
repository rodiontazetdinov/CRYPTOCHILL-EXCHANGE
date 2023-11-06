import arrow from "../images/purple-arrow.svg";
import timeImg from "../images/icons/time-icon.svg";

import { useMediaQuery } from "@uidotdev/usehooks";
import { BenefitCard } from "./BenefitCard";
import classNames from "classnames";

export const TransactionsItem = ({ firstCoin, secondCoin, time }) => {
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
    <div
      className={classNames(
        "bg-order flex flex-row items-center rounded-3xl pt-6 w-full justify-between mb-4 max-w-1328 mx-14",
        {
          "flex-col ": ipadMini || iphone,
          "p-6": !ipadMini && !iphone,
        }
      )}
    >
      {!ipadMini && !iphone && (
        <>
          <p className="text-xl font-semibold w-60">Несколько секунд назад</p>
          <div className="flex flex-row items-center w-60">
            <p className="mr-2">0.031</p>
            <p className="mr-2">BTC</p>
            <img className="mr-2" src={firstCoin} alt="коин" />
            <img className="mr-2" src={arrow} alt="стрелка " />
            <img className="mr-2" src={secondCoin} alt="коин" />
            <p className="mr-2">ETH</p>
          </div>
          <div className="flex flex-row items-center justify-end w-60">
            <img className="mr-2" src={timeImg} />
            {time} min
          </div>
        </>
      )}
      {(ipadMini || iphone) && (
        <>
          <div className="flex flex-row items-center justify-between w-full border-b pb-2 border-purple-700">
            {/* <div className="flex flex-row items-between"> */}
            <p className="text-base font-normal w-60 ml-6">
              Несколько секунд назад
            </p>
            <div className="flex flex-row items-center mr-6">
              <img className="mr-2" src={timeImg} />
              {time} min
            </div>
            {/* </div> */}
          </div>
          <div className="flex flex-row items-center py-3">
            <p className="mr-2">0.031</p>
            <p className="mr-2">BTC</p>
            <img className="mr-2 w-10 h-10" src={firstCoin} alt="коин" />
            <img className="mr-2" src={arrow} alt="стрелка " />
            <img className="mr-2 w-10 h-10" src={secondCoin} alt="коин" />
            <p className="mr-2">ETH</p>
          </div>
        </>
      )}
    </div>
  );
};
