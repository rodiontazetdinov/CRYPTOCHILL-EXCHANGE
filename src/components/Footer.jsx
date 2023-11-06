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
  const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
  const desctop = useMediaQuery("only screen and (min-width : 1328px)");

  return (
    // <div className="bg-main-bg">
      <footer className={classNames(
        "w-full mx-auto pt-6 flex justify-between", {
        "max-w-1328": desctop,
        "max-w-main-container": macbook,
        "max-w-tablet-container": ipadMini,
        "max-w-mobile-container": iphone,
      })}>
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
          <div className="mr-8">
            <h4 className="text-left text-2xl mb-4">Поддержка</h4>
            <ul className="flex flex-col items-start gap-2">
              <li className="text-base"><Link to="/faq">FAQ</Link></li>
              <li className="text-base"><Link to="/support">Поддержка</Link></li>
              <li className="text-base"><Link to="/api">API</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    // </div>
  );
};
