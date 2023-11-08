import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const PageAddressBook = () => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    return (
        <section className="py-6 px-10">
            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-8 leading-tight", {
                "text-3xl": iphone,
                "text-5xl": !iphone,
            })}>Адресная книга</h2>
        </section>
    );
}