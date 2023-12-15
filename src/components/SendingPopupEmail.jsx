// img
import checkedImg from "../images/icons/bi_check.svg";

// libraries
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useRef, useState } from "react";
import { api } from "../utils/api";
import { useSelector } from "react-redux";


export const SendingPopupEmail = ({ setPopupEmailOpen }) => {
    const desctop = useMediaQuery("only screen and (min-width : 1280px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");

    const [email, setEmail] = useState("");
    const [cancelAlert, setCancelAlert] = useState(false);
    const order = useSelector(state => state.order);
    const formRef = useRef();

    /**
     * Закрывает всплывающее окно, если цель события имеет класс «js-close-popup».
     * @param {Event} e - The event object.
     */
    function closePopup(e) {
        e.preventDefault();

        // Проверяем, имеет ли цель события класс "js-close-popup"
        if (e.target.classList.contains("js-close-poupup")) {
            setPopupEmailOpen(false);
        }
    }

    /**
     * Обрабатывает событие отправки формы.
     * Предотвращает поведение отправки формы по умолчанию,
     * регистрирует отправленное электронное письмо и выполняет вызов API
     * чтобы обновить адрес электронной почты, связанный с заказом.
     * Событие @param {Event} — событие отправки формы.
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        // Выполняет вызов API для обновления адреса электронной почты, связанного с заказом
        api.setEmail({
            "id": order.id,
            "token": order.token,
            "email": email
        }).then(response => {
            setPopupEmailOpen(false);
        }).catch(error => {

            console.log(error);
        })
    }

    const createEventSubmit = (e) => {
        e.preventDefault();
        const submitEvent = new Event("submit", { cancelable: true, bubbles: true });
        formRef.current.dispatchEvent(submitEvent);
    }

    return (
        <div
            className="cursor-pointer flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-sending-input js-close-poupup z-10"
            onClick={closePopup}
        >
            <div className={classNames("flex flex-col text-left px-6 py-8 bg-input rounded-2xl cursor-auto space-y-4", {
                "w-[520px]": !iphone,
                "w-[87%]": iphone,
            })}>
                <h3 className={classNames("font-bold text-transparent bg-text bg-clip-text", {
                    "text-3xl leading-10": !iphone,
                    "text-2xl leading-8": iphone,
                })}>Email уведомление о статусе заказа</h3>
                <p className="mt-2">Введите свой действующий email для получения уведомлений об  изменении статуса этого заказа. Любые изменения данных заказа возможны только через подтверждения с email указанного в заказе</p>
                <form
                    ref={formRef}
                    className="flex flex-col space-y-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="w-full h-12 font-semibold text-xl bg-[#2B23AC] rounded-xl px-6 py-4 outline-none"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                        onClick={() => setCancelAlert(!cancelAlert)}
                        className="flex items-center cursor-pointer"
                        htmlFor="cancel-alert"
                    >
                        <div className={classNames("flex justify-center items-center min-w-8 min-h-8 w-8 h-8 rounded-lg border border-[#B36CFF] mr-2", {
                            "bg-btns": cancelAlert,
                        })}>
                            {cancelAlert && <img src={checkedImg} alt="v" />}
                        </div>
                        <span className={classNames(" font-semibold", {
                            "text-xl": !iphone,
                            "text-base max-w-[200px]": iphone,
                        })}>Больше не показывать это уведомление</span>
                    </label>
                    <div className={classNames("flex justify-between", {
                        "flex-col": iphone,
                    })}>
                        <button
                            className={classNames("flex-grow h-12 bg-btns rounded-xl font-semibold text-xl cursor-pointer", {
                                "mr-2": !iphone,
                                "mb-2": iphone,
                            })}
                            onClick={createEventSubmit}
                        >Подтвердить</button>
                        <button
                            className="flex-grow h-12 border border-white rounded-xl font-semibold text-xl"
                            onClick={() => setPopupEmailOpen(false)}
                        >Отказаться</button>
                    </div>
                </form>
                
            </div>
        </div>
    );

}
