import { OrderItem } from "./OrderItem";

import orderSwitch from '../images/order-switch.svg';

export const OrderItems = () => {
    return (
        <div className=" flex flex-row items-center mt-10 rounded-3xl">
            <OrderItem title="Отправляете"/>
            <img src={orderSwitch} alt="switch"/>
            <OrderItem title="Получаете"/>
        </div>
    );
}