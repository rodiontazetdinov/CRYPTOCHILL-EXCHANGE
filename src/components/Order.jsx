import { OrderExchange } from "./OrderExchange";
import { OrderItems } from "./OrderItems";
import { Percents } from "./Percents";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const Order = () => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");
  return (
    <div className={classNames("flex flex-col items-center   ",{
      "w-[696px] px-6 rounded-[64px]": ipadMini,
      "w-[912px] px-24 rounded-[80px]": macbook,
      "px-24 rounded-[80px]": desctop,
      "bg-order mt-14 py-6": !iphone,
      "bg-transparent mt-6 py-0": iphone,
    })}>
      <h2 className="text-center text-3xl">Тип заказа</h2>
      <Percents />
      <OrderItems />
      <OrderExchange />
      <p className="text-base font-light mt-4">
        Используя сайт и создавая обмен, вы соглашаетесь<br/> с <span className="font-normal">Условиями
        использования</span> и <span className="font-normal">Политикой конфиденциальности</span>
      </p>
    </div>
  );
};
