
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { useState } from "react";
import bankingImg from '../images/sending-icons/banking.svg'

export const SendingNotifications = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1440px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");
  const phone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 585px)"
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
       event.preventDefault();
    console.log('submitted')
  }

  return (
    <form className="flex flex-col bg-order pt-12 px-8 rounded-3xl" onSubmit={handleSubmit}>
        <h3 className={classNames(" text-center font-bold font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mb-4 self-center",{
          "text-3xl": phone,
          "text-5xl": !phone
        })}>Уведомления о статусе заказа</h3>
        <p className={classNames(" font-semibold mb-6",{" text-base": phone, "text-xl": !phone})}>Введите свой email, если хотите получать уведомления о изменении статуса этого заказа</p>
        <input className="w-full bg-[#08035B] px-6 rounded-2xl outline-none h-12" placeholder="Ваш email" type="email" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" className={classNames("font-semibold text-xl px-4 py-3 bg-btns rounded-lg self-left mt-4 w-full ", {
          'mb-12': phone,
        })}>Включить уведомления</button>
        {!phone &&<img className="self-center" src={bankingImg} alt="картинка банкинга"/>}
    </form>
  );
};
