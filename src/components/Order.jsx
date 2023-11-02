import { OrderExchange } from "./OrderExchange";
import { OrderItems } from "./OrderItems";
import { Percents } from "./Percents";

export const Order = () => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-order py-6 px-24 max-w-screen-lg mt-14">
      <h2 className="text-center text-3xl">Тип заказа</h2>
      <Percents />
      <OrderItems />
      <OrderExchange />
      <p className="text-base font-light mt-4">
        Используя сайт и создавая обмен, вы соглашаетесь<br/> с <span className="font-normal">Условиями
        использования</span> и <span className="font-normal">Политикой конфиденциальности</span>
      </p>
    </div>
  );
};
