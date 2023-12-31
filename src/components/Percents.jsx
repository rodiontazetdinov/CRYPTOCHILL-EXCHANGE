import { useState } from "react";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOrderCreationState, setPercentTypeFixed, setPercentTypeFloating } from "../store/actions";
import { api } from "../utils/api";

export const Percents = () => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");
  // const [isActive, setIsActive] = useState(true);
  const isFixed = useSelector((state) => state.isFixed);
  const creatingOrder = useSelector((state) => state.creatingOrder);
  
  const dispatch = useDispatch();

  const handleFixed = () => {
    dispatch(setPercentTypeFixed());
    api.getPrice({
      fromCcy: creatingOrder.from.code,
      toCcy: creatingOrder.to.code,
      amount: creatingOrder.from.amount,
      direction: "from",
      type: 'fixed'
    });
  }
  const handleFloating = () => {
    dispatch(setPercentTypeFloating());
    api.getPrice({
      fromCcy: creatingOrder.from.code,
      toCcy: creatingOrder.to.code,
      amount: creatingOrder.from.amount,
      direction: "from",
      type: 'float'
    }).then((response) => dispatch(setOrderCreationState(response.data)))
  }
  
  return (
    <div className={classNames("flex items-center mt-4", {
      "w-full flex-row": macbook || desctop,
      "w-[85%] flex-row": ipadMini,
      "flex-col w-full": iphone,
    })}>
      <button
        className={classNames(
          "rounded-xl py-3 px-7 justify-center items-center flex w-full",
          {
            "bg-btns": isFixed,
            "bg-transparent border rounded-lg border-white border-solid": !isFixed,
            "m-0 mb-2 max-w-mobile-container": iphone,
            "mr-3": !iphone,
          }
        )}
        onClick={handleFixed}
      >
        {"Фиксированный (1.0%)"}
      </button>
      <button
        className={classNames(
          "rounded-xl py-3 px-7 justify-center items-center flex w-full",
          {
            "bg-btns": !isFixed,
            "bg-transparent border rounded-lg border-white border-solid":
              isFixed,
              "m-0 max-w-mobile-container": iphone,
              "ml-3": !iphone,
          }
        )}
        onClick={handleFloating}
      >
        {"Плавающий (0.5%)"}
      </button>
    </div>
  );
};
