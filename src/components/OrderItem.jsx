import { OrderItemCoin } from "./OrderItemCoin";


export const OrderItem = ({title}) => {
    return (
        <div className="bg-white bg-opacity-20 flex flex-col items-center p-3 rounded-lg">
            <h3 className="text-3xl w-full text-left">{title}</h3>
            <OrderItemCoin/>
            <div className="flex flex-row justify-between w-full">
            <p className="text-left text-base mt-2">1 BTC ≈ 15.9754668 ETH</p>
            <p className="text-left text-base mt-2">51$</p>
            </div>
            
        </div>
    );
}