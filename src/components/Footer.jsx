import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import instagram from "../images/footerlinks/instagram.svg";
import telegram from "../images/footerlinks/telegram.svg";
import reddit from "../images/footerlinks/reddit.svg";
import medium from "../images/footerlinks/medium.svg";
import bc from "../images/footerlinks/bc.svg";
import star from "../images/footerlinks/star.svg";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Footer = ({ isLoggedIn }) => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1328px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1328px)");
  const laptop = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 1125px)"
  );
  const miniFooter = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 635px)"
  );

  return (
    <footer
      className={classNames(
        "bg-transparent  mx-auto pt-6 flex justify-between",
        {
          "w-[1328px]": desctop,
          "max-w-main-container": macbook,
          "max-w-tablet-container": ipadMini,
          "max-w-mobile-container": iphone,
          "flex-col": laptop,
        }
      )}
    >
      {!laptop && !iphone && (
        <>
          <div className="flex flex-col justify-start">
            <Link to={"/"} className="flex flex-row items-center h-16">
              <img className="mr-4" src={logo} alt="logo" />
              <p className="text-xl">CRYPTOCHILL</p>
            </Link>
            <ul className="flex flex-row items-center mt-8">
              <li>
                <Link>
                  <img src={instagram} alt="инстаграм" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={telegram} alt="телеграм" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={reddit} alt="реддит" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={medium} alt="медиум" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={bc} alt="бц" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={star} alt="стар" />
                </Link>
              </li>
            </ul>
            <div className="text-xl mt-[72px]">
              © 2018–2023 Cryptochill. All rights reserved
            </div>
          </div>
          <div className="flex flex-row items-start gap-8">
            <div>
              <h4 className="text-left text-2xl mb-4">CRYPTOCHILL</h4>
              <ul className="flex flex-col items-start gap-2">
                <li className="text-base">О нас</li>
                <li className="text-base">Наш бренд</li>
                <li className="text-base">Партнерская программа</li>
                <li className="text-base">Условия использования</li>
                <li className="text-base">Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h4 className="text-left text-2xl mb-4">Популярные</h4>
              <ul className="flex flex-col items-start gap-2">
                <li className="text-base">Блог</li>
                <li className="text-base">XMR to BTC</li>
                <li className="text-base">ETH to BTC</li>
                <li className="text-base">LTC to ETH</li>
              </ul>
            </div>
            <div
              className={classNames("", {
                "mr-8": macbook,
                "mr-0": !macbook,
              })}
            >
              <h4 className="text-left text-2xl mb-4">Поддержка</h4>
              <ul className="flex flex-col items-start gap-2">
                <li className="text-base">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="text-base">
                  <Link to="/support">Поддержка</Link>
                </li>
                <li className="text-base">
                  <Link to="/api">API</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {laptop && (
        <>
          <div className={classNames("flex flex-col",{
            "mx-auto": miniFooter,
            "justify-start": !miniFooter,
          })}>
            <Link to={"/"} className="flex flex-row items-center h-16">
              <img className="mr-4" src={logo} alt="logo" />
              <p className="text-xl">CRYPTOCHILL</p>
            </Link>
            <ul className="flex flex-row items-center mt-8 mb-9">
              <li>
                <Link>
                  <img src={instagram} alt="инстаграм" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={telegram} alt="телеграм" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={reddit} alt="реддит" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={medium} alt="медиум" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={bc} alt="бц" />
                </Link>
              </li>
              <li className="ml-4">
                <Link>
                  <img src={star} alt="стар" />
                </Link>
              </li>
            </ul>
          </div>
          <div className={classNames("flex items-start gap-8 justify-between",{
            "flex-col mx-auto": miniFooter,
            "flex-row": !miniFooter,
          })}>
            <div>
              <h4 className="text-left text-2xl mb-4">CRYPTOCHILL</h4>
              <ul className="flex flex-col items-start gap-2">
                <li className="text-base">О нас</li>
                <li className="text-base">Наш бренд</li>
                <li className="text-base">Партнерская программа</li>
                <li className="text-base">Условия использования</li>
                <li className="text-base">Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h4 className="text-left text-2xl mb-4">Популярные</h4>
              <ul className="flex flex-col items-start gap-2">
                <li className="text-base">Блог</li>
                <li className="text-base">XMR to BTC</li>
                <li className="text-base">ETH to BTC</li>
                <li className="text-base">LTC to ETH</li>
              </ul>
            </div>
            <div
              className={classNames("", {
                "mr-8": macbook,
                "mr-0": !macbook,
              })}
            >
              <h4 className="text-left text-2xl mb-4">Поддержка</h4>
              <ul className="flex flex-col items-start gap-2">
                <li className="text-base">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="text-base">
                  <Link to="/support">Поддержка</Link>
                </li>
                <li className="text-base">
                  <Link to="/api">API</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classNames(" mt-[72px]",{
            "text-sm font-normal mb-6": miniFooter,
            "text-xl font-semibold": !miniFooter,
          })}>
          </div>
        </>
      )}
    </footer>
    // </div>
  );
};
