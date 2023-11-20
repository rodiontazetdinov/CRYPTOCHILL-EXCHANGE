import { Link } from "react-router-dom";
import { FaqSeqtionItem } from "./FaqSeqtionItem";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const FaqSection = () => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1280px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");
  return (
    <section className="flex flex-col max-w-1328 self-center">
      <h2 className={classNames("text-center font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-10 self-center",{
        "text-2xl font-semibold": iphone,
        "text-5xl font-bold": !iphone
      })}>
        FAQ
      </h2>
      <FaqSeqtionItem
        question={"Как отследить мой заказ?"}
        answer={
          "Тремя способами: в реальном времени на нашем сайте, через подписку на email уведомления или путем просмотра транзакций в блокчейн по ссылкам из вашего заказа."
        }
      />
      <FaqSeqtionItem
        question={"Почему я могу вам доверять?"}
        answer={
          "Никакой регистрации и удержания ваших средств, все обмены проходят с максимальной скоростью и в полностью автоматическом режиме."
        }
      />

      <FaqSeqtionItem
        question={"Есть ли скрытые комиссии?"}
        answer={
          "Честность — наш главный приоритет, поэтому все наши комиссии максимально прозрачны: • 1% за фиксированный курс • 0.5% если вы выбираете плавающий курс"
        }
      />
      <Link className="self-right font-semibold text-xl text-right mt-6" to="/faq">Перейти на страницу FAQ</Link>
    </section>
  );
};
