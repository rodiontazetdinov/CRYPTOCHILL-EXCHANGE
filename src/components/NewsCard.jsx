import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const NewsCard = ({ title, description, imgLink}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px)"
  );
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <div className={classNames("flex flex-col justify-left bg-order p-4 rounded-lg w-full")}>
      <div className={classNames("flex w-full bg-[#976ADE] rounded-lg ", {
        "h-[300px]": !iphone,
        "h-[230px]": iphone,
      })}>
        <img className="" src={imgLink} alt={title}/>
      </div>
        <h3 className={classNames("text-2xl font-semibold max-w-[280px] mt-4 text-left",{
          "text-xl": iphone,
        })}>{title}</h3>
        <p className="mt-2 text-left text-base h-[98px] line-clamp-4">{description}</p>
        <button className={classNames("font-semibold text-xl px-4 py-3 bg-btns rounded-lg self-left mt-4 w-28 ")}>Читать</button>
    </div>
  );
};
