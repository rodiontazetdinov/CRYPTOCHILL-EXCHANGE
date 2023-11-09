import "@splidejs/react-splide/css/core";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import lightning from '../images/sending-icons/lightning.svg';
import bitcoin from '../images/sending-icons/bitcoin.svg';
import time from '../images/sending-icons/time.svg';
import segwit from '../images/sending-icons/segwit.svg';
import calculator from '../images/sending-icons/calc.svg';

export const SendingToKnow = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 500px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1440px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");

    const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");

  return (
    <div className={classNames("flex flex-col bg-order rounded-3xl px-8",{
        'flex-col justify-left  relative': miniSending && !iphone,
        'flex-row mx-auto ': !miniSending,
        "flex-col justify-left ml-4 relative": iphone,
        "pb-[104px]": desctop,
        "pb-12": !desctop,
      })}>
        <h3 className={classNames(" text-center  font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-8 self-center",{
          "text-3xl font-semibold": iphone,
          "text-5xl font-bold": !iphone,
        })}>Что нужно знать?</h3>
        <ul className="space-y-4 text-left">
            <li className="flex flex-row space-x-4">
                <img className={classNames("",{"w-8 h-8": iphone})} src={lightning} alt="иконка молния" />
                <p className="text-base">Нужно всего 1 подтверждение блокчейна Bitcoin для осуществления обмена</p>
            </li>
            <li className="flex flex-row space-x-4">
                <img className={classNames("",{"w-8 h-8": iphone})} src={bitcoin} alt="иконка биткойна" />
                <p className="">Скорость подтверждения транзакции Bitcoin
 зависит от уровня загруженности сети блокчейн,
подробнее в нашей статье
</p>
            </li>
            <li className="flex flex-row space-x-4">
                <img className={classNames("",{"w-8 h-8": iphone})} src={segwit} alt="иконка segwit" />
                <p className="">Мы используем segwit адреса Bitcoin для более
 быстрых и дешёвых транзакций, если ваш кошелёк
 не поддерживает этот тип адресов, обратитесь в
техподдержку для смены адреса
</p>
            </li>
            <li className="flex flex-row space-x-4">
                <img className={classNames("",{"w-8 h-8": iphone})} src={calculator} alt="иконка калькулятора" />
                <p className="">Если сумма отправленной вами транзакции будет
отличаться от первоначальной суммы указанной в
заказе с плавающим курсом, заказ будет
 автоматически пересчитан.
</p>
            </li>
            <li className="flex flex-row space-x-4">
                <img className={classNames("",{"w-8 h-8": iphone})} src={time} alt="иконка таймера" />
                <p className="">Если ваша транзакция поступит после истечения
 заказа, но в течение 24 часов, то данная транзакция
 автоматически отобразится в заказе. Вы сможете
 самостоятельно продолжить заказ или осуществить возврат средств.</p>
            </li>
        </ul>
    </div>
  );
};
