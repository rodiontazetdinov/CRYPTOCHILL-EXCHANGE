import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";

//  img
import biCheck from "../../images/icons/bi_check.svg";

export const PageInfo = ({ user }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const [isUserEmail, setIsUserEmail] = useState(user.email);
    const [isUserPassword, setIsUserPassword] = useState(user.password);
    const [isUserAlarmEmail, setIsUserAlarmEmail] = useState(user.alarmEmail);

    const regDateObj = new Date(user.registrationDate);
    const lastDateObj = new Date(user.dateLastVisit);

    const regDateStr = regDateObj.toLocaleString("ru", {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const regTimeStr = regDateObj.toLocaleString("ru", {
        hour: 'numeric',
        minute: 'numeric',
    });
    const lastDateStr = lastDateObj.toLocaleString("ru", {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const lastTimeStr = lastDateObj.toLocaleString("ru", {
        hour: 'numeric',
        minute: 'numeric',
    });

    const lastVisitMinutes = (new Date() - lastDateObj) / 1000 / 60;

    return (
        <section className={classNames("py-6 flex-grow", {
            "pl-10": desctop || macbook,
            "pl-0": iphone || ipadMini
        })}>
            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-6 leading-tight", {
                "text-3xl": iphone,
                "text-5xl": !iphone,
            })}>Информация об аккаунте</h2>

            <p className="text-base font-normal text-[#ffffffbb] mb-6">
                <span className="mr-6">
                    {`Дата регистрации: ${regDateStr}, ${regTimeStr}`}
                </span>
                {`Последний визит: ${lastVisitMinutes < 1 ? 'несколько секунд назад' : ''} (${lastDateStr}, ${lastTimeStr})`}
            </p>

            {/* INPUT смены и подтверждения Email-а */}
            <form 
                className={classNames("flex mb-6 text-xl", {
                    "flex-col items-start": iphone,
                    "items-center": !iphone,
                })}
                name="Email"
            >
                <label className={classNames("flex", {"mb-2 mr-0": iphone, 'mr-2': !iphone})} htmlFor="email-input">
                    Email: 
                    <input
                        id="email-input"
                        className="bg-transparent outline-none w-[110px] block ml-2"
                        type="text"
                        value={isUserEmail}
                        onChange={(ev) => setIsUserEmail(ev.target.value)}
                    />
                </label>
                {!user.verifiedEmail && (
                    <span className={classNames("text-[#FF5454]", {'mb-6': iphone, 'mr-6': !iphone})}>
                        (Не подтвержден)
                    </span>
                )}
                <div className="flex">
                    <button
                        className="bg-btns h-12 px-4 py-3 rounded-xl text-xl mr-2"
                        type="submit"
                    >Подтвердить</button>
                    <button
                        className="bg-btns h-12 px-4 py-3 rounded-xl text-xl"
                        type="submit"
                    >Изменить</button>
                </div>
            </form>

            {/* INPUT смены пароля */}
            <form className="flex items-center mb-6 text-xl" name="Password">
                <label className="mr-2" htmlFor="pass-input">Пароль: </label>
                <input
                    id="pass-input"
                    className="bg-transparent outline-none w-[110px] mr-2"
                    type="password"
                    value={isUserPassword}
                    onChange={(ev) => setIsUserPassword(ev.target.value)}
                />
                <button
                    className="bg-btns w-32 h-12 px-4 py-3 rounded-xl text-xl"
                    type="submit"
                >Изменить</button>
            </form>

            {/* INPUT подтверждения рассылки email */}
            <form className="text-xl">
                <label className={classNames("flex items-center leading-6", {
                    "text-base font-normal": iphone
                })}>
                    <input
                        className="hidden"
                        type="checkbox"
                        name=""
                        checked={isUserAlarmEmail}
                        onChange={(ev) => setIsUserAlarmEmail(ev.target.checked)}
                    />
                    <div className={classNames("rounded-lg border-[#B36CFF] border w-8 h-8 flex items-center justify-center mr-2", {
                        "bg-btns": isUserAlarmEmail
                    })}>
                        {isUserAlarmEmail && (
                            <img src={biCheck} alt="v"/>
                        )}
                    </div>
                    <span className="inline-block w-[80%]">Получать уведомления о изменении статуса заказа на почту</span>
                </label>
                <p className={classNames("text-[#FF5454] mt-2 text-base font-normal", {
                    "pl-10": !iphone,
                    "pl-0": iphone
                })}>Для получения уведомлений подтвердите адрес электронной почты</p>
            </form>
        </section>
    );
}