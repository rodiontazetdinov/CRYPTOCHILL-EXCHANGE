import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { SendingLoader } from "../components/SendingLoader";
import { SendingCoinTo } from "../components/SendingCoinTo";
import { useState } from "react";
import { SendingToKnow } from "../components/SendingToKnow";
import { SendingNotifications } from "../components/SendingNotifications";
import { SendingOrderNumber } from "../components/SendingOrderNumber";
import { SendingQr } from "../components/SendingQr";

export const SendingPage = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1440px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniSending = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 911px)"
  );

  const [isWaiting, setIsWaiting] = useState(false);
  const [isAprroved, setIsApproved] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <section
      className={classNames(
        "flex flex-col self-center mx-auto w-full space-y-8",
        {
          "px-14": macbook || ipadMini,
          "max-w-[1328px]": desctop,
          // "px-14": ipadMini,
          "px-4": iphone,
          "items-left": miniSending,
          "items-center": !miniSending,
        }
      )}
    >
      <SendingCoinTo />
      {/* <div className={classNames("")}></div> */}
      <div className="flex flex-row w-full space-x-6">
        <SendingOrderNumber />
        <SendingQr />
      </div>
      {miniSending && (
        <div className="flex flex-col space-y-6">
          <SendingNotifications />
          <SendingLoader />
          <SendingToKnow />
        </div>
      )}
      {!miniSending && (
        <>
          <SendingLoader />
          <div className="flex flex-row space-x-6">
            <SendingToKnow />
            <SendingNotifications />
          </div>
        </>
      )}
    </section>
  );
};
