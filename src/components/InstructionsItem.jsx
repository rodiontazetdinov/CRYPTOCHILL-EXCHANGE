import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const InstructionsItem = ({ title, description, imgLink}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 343px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 745px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <div className={classNames("flex flex-col justify-left w-full bg-order p-4 rounded-lg",{
      "max-w-[580px]": desctop,
      "max-w-[500px]": macbook,
      "max-w-[500px]": ipadMini,
      "max-w-[302px]": iphone,
    })}>
        <img className="w-20 h-20" src={imgLink} alt={title}/>
        <h3 className={classNames("text-2xl font-semibold max-w-[350px] mt-4 text-left", {
          "text-xl": iphone,
        })}>{title}</h3>
        <p className={classNames("mt-2 text-left text-base h-[98px] line-clamp-4 ",{
          "line-clamp-4": iphone,
        })}>{description}</p>
        <button className={classNames("font-semibold text-xl px-4 py-3 bg-btns rounded-lg self-left mt-4 w-28 ")}>Читать</button>
    </div>
  );
};
