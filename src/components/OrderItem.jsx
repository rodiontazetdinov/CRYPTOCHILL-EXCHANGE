import { OrderItemCoin } from "./OrderItemCoin";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const OrderItem = ({ title }) => {
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );
  return (
    <div
      className={classNames(
        "bg-white bg-opacity-20 flex flex-col items-center p-3 rounded-[24px]",
        {
          "mt-2 w-full max-w-mobile-container": miniOrder,
          "w-[347px]": laptop,
          
        }
      )}
    >
      <h3 className="text-3xl w-full text-left">{title}</h3>
      <OrderItemCoin />
      <div className="flex flex-row justify-between w-full">
        <p className="text-left text-base mt-2">1 BTC ≈ 15.9754668 ETH</p>
        <p className="text-left text-base mt-2">51$</p>
      </div>
    </div>
  );
};
