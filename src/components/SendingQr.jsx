import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../store/actions";
import { api } from "../utils/api";

// import qr from "../images/sending-icons/qr.svg";

export const SendingQr = () => {

  const miniTop = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 1210px)");
    const phone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 585px)"
      );

      const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(true);
  const order = useSelector((state) => state.order);
  const [qrWithAmount, setQrWithAmount] = useState('');
  const [qrWithAddress, setQrWithAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    order &&
    api.getQr({id: order.id, token: order.token, choice: "EXCHANGE"})
    .then((response) => {
      response.data.map((item) => {
        if (item.title === 'With amount') {
          setQrWithAmount(item.src)
        } else if (item.title === 'Address') {
          setQrWithAddress(item.src)
        }
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }, [order]);

  return (
    <div
      className={classNames("flex flex-col bg-order px-8 py-8 rounded-3xl text-left space-y-4",{
          "w-1/2": miniTop && !phone,
          "w-1/4": !miniTop,
          'w-full': phone,
      })}
      onSubmit={handleSubmit}
    >
      <img className="bg-white p-6 rounded-2xl" src={order && isActive ? qrWithAmount : qrWithAddress} alt="qr код"/>
      <div className="flex flex-row items-center w-full px-2 py-1 bg-purple-800 rounded-2xl space-x-2 h-12">
        <button className={classNames("text-xl font-semibold flex items-center w-full text-center justify-center h-full",{
            'bg-btns rounded-xl': !isActive
        })} onClick={() => setIsActive((prev) => !prev)}>адрес</button>
        <button className={classNames("text-xl font-semibold flex items-center w-full text-center justify-center h-full",{
            'bg-btns rounded-xl': isActive
        })} onClick={() => setIsActive((prev) => !prev)}>с суммой</button>
      </div>
    </div>
  );
};
