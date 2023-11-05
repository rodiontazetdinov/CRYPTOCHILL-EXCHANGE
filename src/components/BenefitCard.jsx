import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const BenefitCard = ({ imageSrc, title, description }) => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery("only screen and (min-width : 744px)");
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const laptop = useMediaQuery("only screen and (min-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");
  return (
    <div
      className={classNames(
        "bg-order flex  rounded-2xl p-6  w-full  text-left h-full",
        {
          "h-[350px] flex-col": ipadMini,
          "w-full flex-row items-start mb-3 justify-start": iphone,
          "mr-6 last:mr-0": macbook,
        //   "flex-row": miniOrder,
        }
      )}
    >
      <img
        className={classNames("", {
          "w-[120px] h-[130px]": ipadMini,
          "w-[48px] h-[53px] mr-2": iphone,
        })}
        src={imageSrc}
        alt={title}
      />
      {laptop && (
        <>
          <p className="text-3xl font-bold mt-4">{title}</p>
          <p className="mt-2 text-xl font-semibold">{description}</p>
        </>
      )}
      {!laptop && (
        <div className="w-full flex flex-col items-start">
          <p className="text-3xl font-bold mt-4 justify-self-start">{title}</p>
          <p className="mt-2 text-xl font-semibold">{description}</p>
        </div>
      )}
    </div>
  );
};
