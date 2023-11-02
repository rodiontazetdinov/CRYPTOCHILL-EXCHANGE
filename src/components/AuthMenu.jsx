import { Link } from "react-router-dom";

export const AuthMenu = () => {
    return (
      
      <div className="flex flex-row items-center">
        <button className="text-xl cursor-pointer">Вход</button>
        <button className="text-xl ml-4 py-3 px-4 bg-btns rounded-2xl cursor-pointer">Регистрация</button>
      </div>
    );
  };