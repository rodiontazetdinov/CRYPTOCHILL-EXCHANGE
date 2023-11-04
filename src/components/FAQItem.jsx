import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";

export const FAQItem = ({ question, answer, account }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
    const desctop = useMediaQuery("only screen and (min-width : 1280px)");

    const [isAnswerOpen, setIsAnswerOpen] = useState(false);

    function handleOpen() {
        setIsAnswerOpen((prev) => !prev);
    }

    return (
        <li className="flex justify-between mb-8 w-full">
            <div>
                <h3 className={classNames(
                    "font-bold mb-4 flex", {
                    "text-5xl": macbook,
                    "text-5xl ": desctop,
                    "text-[32px]": ipadMini,
                    "text-2xl": iphone,
                })}>
                    <span className="mr-8">{account}</span>
                    {question}
                </h3>
                {isAnswerOpen && (
                    <div className={classNames(
                        null, {
                        "text-xl": desctop,
                        "text-xl ": macbook,
                        "text-xl  ": ipadMini,
                        "text-base": iphone,
                    })}>
                        {answer}
                    </div>
                )}
            </div>

            <button 
                className="w-12 h-12"
                type="button"
                onClick={handleOpen}
            >
                {isAnswerOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <rect width="48" height="48" rx="24" fill="#08035B" />
                        <rect x="12" y="22" width="24" height="4" rx="2" fill="#D7DFFF" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="24" fill="#08035B"/>
                        <rect x="12" y="22" width="24" height="4" rx="2" fill="#D7DFFF"/>
                        <rect x="26" y="12" width="24" height="4" rx="2" transform="rotate(90 26 12)" fill="#D7DFFF"/>
                    </svg>
                )}
            </button>
        </li>
    );
}