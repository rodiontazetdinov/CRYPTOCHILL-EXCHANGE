import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import review1 from "../images/review1.svg";
import review2 from "../images/review2.svg";
import pictureDone from "../images/picture-done.png";

export const SendingTransactionDone = () => {
  const miniTop = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 1210px)"
  );
  const phone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 585px)"
  );


//   useEffect(() => {
//     // setTimer(order && order.time.left);
//   }, [order]);

  return (
    <div
      className={classNames(
        "flex flex-col bg-order rounded-3xl text-left  space-y-4 w-full",
        {
          "w-2/4": !miniTop,
          "w-full": miniTop,
          "text-xl p-6 space-y-4": phone,
          "p-8": !phone,
        }
      )}
    >
    <p className="text-5xl bg-text text-transparent bg-clip-text font-bold mt-6">
        Ваш Bitcoin был отправлен
    </p>
    <p className={classNames("w-[380px]")}>Мы надеемся, что вам понравился наш сервис и будем рады, если вы поддержите нас отзывом</p>
    <div className="flex">
        <div className="flex items-center cursor-pointer mr-4">
            <img className="mr-1" src={review1} alt="Icon" />
            Оставить отзыв
        </div>
        <div className="flex items-center cursor-pointer">
            <img className="mr-1" src={review2} alt="Icon" />
            Оставить отзыв
        </div>
    </div>
    <div className="flex justify-end mt-0">
        <img src={pictureDone} alt="" />
    </div>
    </div>
  );
};
