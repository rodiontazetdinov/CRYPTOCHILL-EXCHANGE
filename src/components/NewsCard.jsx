import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { Link } from "react-router-dom";

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

  const tags = ['Solana', 'Stellar', 'Lumens', 'Tether', 'TON', 'Toncoin']

  return (
    <div className={classNames("flex flex-col justify-left bg-order p-4 rounded-lg w-full")}>
      <div className={classNames("flex w-full bg-[#976ADE] rounded-lg relative", {
        "h-[300px]": !iphone,
        "h-[230px]": iphone,
      })}>
        <div className="absolute top-3 left-3 flex flex-wrap">
          {tags.map((tag) => { return (
            <button
              className=" bg-[#2B23AC] rounded-lg mr-2 px-2 py-1 mb-2 cursor-pointer hover:bg-[#3c31e9]"
            >{tag}</button>
          )})}
        </div>
        <img className="" src={imgLink} alt={title}/>
      </div>
        <h3 className={classNames("text-2xl font-semibold max-w-[280px] mt-4 text-left",{
          "text-xl": iphone,
        })}>{title}</h3>
        <p className="mt-2 text-left text-base h-[98px] line-clamp-4">{description}</p>
        <Link
          className={classNames("font-semibold text-xl text-center px-4 py-3 bg-btns rounded-lg self-left mt-4 w-28 ")}
          to={`/news/1`}
          reloadDocument
        >Читать</Link>
        {/* <button className={classNames("font-semibold text-xl px-4 py-3 bg-btns rounded-lg self-left mt-4 w-28 ")}>Читать</button> */}
    </div>
  );
};
