import { OrderItem } from "./OrderItem";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import orderSwitch from '../images/order-switch.svg';

export const OrderItems = () => {
    const iphone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 744px)"
      );
      const miniOrder = useMediaQuery(
        "only screen and (max-width : 610px)"
      );
      const ipadMini = useMediaQuery(
        "only screen and (min-width : 744px)"
      );
      const laptop = useMediaQuery(
        "only screen and (min-width : 1024px)"
      );
      const macbook = useMediaQuery("only screen and (min-width : 1024px)");
      const desctop = useMediaQuery("only screen and (min-width : 1280px)");
    return (
        <div className={classNames(" flex flex-row items-center mt-10  w-full",{
            "flex-col w-full": miniOrder,
        })}>
            <OrderItem title="Отправляете"/>
            {!miniOrder && <img src={orderSwitch} alt="switch"/>}
            {/* <img src={orderSwitch} alt="switch"/> */}
            <OrderItem title="Получаете"/>
        </div>
    );
}