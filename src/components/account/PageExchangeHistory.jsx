// components
import { ExchangeTable } from "../ExchangeTable";

// Lib
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const PageExchangeHistory = ({ user }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const listExchangesPending = user.history.filter((exchange) => exchange.status === 'Ожидается');
    const listExchangesCompleted = user.history.filter((exchange) => exchange.status === 'Выполнен');

    return (
        <section className="py-6 pl-10 text-xl flex-grow">
            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-10 leading-tight", {
                "text-3xl": iphone,
                "text-5xl": !iphone,
            })}>История обменов</h2>

            {(user.history.length === 0) && (
                <div>
                    <p className="mb-6">Вы еще не создавали заказов.<br></br>Создайте свой первый заказ</p>
                    <button className="bg-btns h-12 px-4 py-3 rounded-xl">Создать заказ</button>
                </div>
            )}

            {(user.history.length > 0) && (
                <>
                    <ExchangeTable exchanges={listExchangesPending} title="Активные заказы" />
                    <ExchangeTable exchanges={listExchangesCompleted} title="Выполненные заказы" />
                </>

            )}



        </section>
    );
}