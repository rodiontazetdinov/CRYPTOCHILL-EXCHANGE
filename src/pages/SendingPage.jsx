
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";


import { SendingLoader } from "../components/SendingLoader";

export const SendingPage = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");

  return (
    <section className={classNames("flex flex-col self-center mx-auto",{
      "max-w-[calc(100% - 112px)]": macbook,
      "max-w-[1328px]": desctop,
      "max-w-[696px]": ipadMini,
      "max-w-[696px]": iphone,
    })}>
      <div></div>
      <SendingLoader/>
      <div></div>
    </section>
  );
};
