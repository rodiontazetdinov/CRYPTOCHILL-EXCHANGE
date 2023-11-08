import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { OrderTable } from "../OrderTable";

export const PageExchangeHistory = ({ user }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const setIsUserPassword = new Array().length;

    return (
        <section className="py-6 px-10 text-xl">
            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-8 leading-tight", {
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
                <div>
                    <OrderTable />
                </div>
            )}


        </section>
    );
}