import { useState } from "react";
import classNames from "classnames";

export const Percents = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex flex-row items-center mt-4 w-full">
      <button
        className={classNames(
          "rounded-xl py-3 px-7 justify-center items-center flex mr-3 w-full",
          {
            "bg-btns": isActive,
            "bg-transparent border rounded-lg border-white border-solid":
              !isActive,
          }
        )}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {"Фиксированный (1.0%)"}
      </button>
      <button
        className={classNames(
          "rounded-xl py-3 px-7 justify-center items-center flex ml-3 w-full",
          {
            "bg-btns": !isActive,
            "bg-transparent border rounded-lg border-white border-solid":
              isActive,
          }
        )}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {"Плавающий (0.5%)"}
      </button>
    </div>
  );
};
