import { useState } from "react";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  const [isActive, setIsActive] = useState(true);
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
            "bg-btns": isActive,
            "bg-transparent border rounded-lg border-white border-solid": !isActive,
            "m-0 mb-2 max-w-mobile-container": iphone,
            "mr-3": !iphone,
          }
        )}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {"Фиксированный (1.0%)"}
      </button>
      <button
        className={classNames(
          "rounded-xl py-3 px-7 justify-center items-center flex w-full",
          {
            "bg-btns": !isActive,
            "bg-transparent border rounded-lg border-white border-solid":
              isActive,
              "m-0 max-w-mobile-container": iphone,
              "ml-3": !iphone,
          }
        )}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {"Плавающий (0.5%)"}
      </button>
    </div>
  );
};
