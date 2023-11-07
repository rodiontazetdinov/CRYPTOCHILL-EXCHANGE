// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { NewsCard } from "../components/NewsCard";


export const BlockNews = ({ listNews }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    return (
        <div className="w-full overflow-x-scroll mb-12">
            <ul className={classNames("flex flex-wrap justify-between", {
                'w-[1185px]': ipadMini,
                'w-[1860px]': iphone
            })}>
                {listNews.map((news, index) => {
                    if (index < 5 && desctop) {
                        return (<li key={index} className={classNames(
                            '', {
                                'max-w-first-news-card mb-6': index < 2,
                                'max-w-other-news-cagd': index >= 2
                            }
                        )}>
                            <NewsCard
                                title={news.title}
                                description={news.description}
                                imgLink={news.img}
                            />
                        </li>)
                    } else if (index < 6 && (macbook || ipadMini)) {
                        return (<li key={index} className={classNames(
                                    "max-w-other-news-cagd", {
                                    'mb-6': index < 3,
                                })}>
                            <NewsCard
                                title={news.title}
                                description={news.description}
                                imgLink={news.img}
                            />
                        </li>)
                    } else if (index < 6 && iphone) {
                        return (<li key={index} className={classNames(
                                    "max-w-[302px]", {
                                })}>
                            <NewsCard
                                title={news.title}
                                description={news.description}
                                imgLink={news.img}
                            />
                        </li>)
                    }
                })}
            </ul>
        </div>
    );
}