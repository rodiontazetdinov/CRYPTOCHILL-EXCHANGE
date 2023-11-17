import { DropdownListCoins } from "../DropdownListCoins";



export const PopupPartnerLink = ({
    setPopupOpen,
    dropdownSendingCoin,
    setDropdownSendingCoin,
    dropdownReceivingCoin,
    setDropdownReceivingCoin,
    dropdownCoinsMenuOpenHandler
}) => {
    return (
        <div
            onClick={(ev) => {
                if (ev.currentTarget === ev.target) {
                    document.body.style.overflow = 'scroll';
                    setPopupOpen(false);
                }
            }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#06042366] flex justify-center items-center z-20"
        >
            <div className="bg-main-bg rounded-2xl w-[352px] flex flex-col pt-10 px-8 pb-8">
                <p className="text-center text-3xl text-transparent bg-text bg-clip-text font-bold mb-4">Ссылка с выбором валют</p>
                <div className="w-full mb-4">
                    <DropdownListCoins
                        dropdownState={dropdownSendingCoin}
                        setDropdownState={(state) => dropdownCoinsMenuOpenHandler(setDropdownSendingCoin, state)}
                    />
                </div>
                <div className="w-full mb-4">
                    <DropdownListCoins
                        dropdownState={dropdownReceivingCoin}
                        setDropdownState={(state) => dropdownCoinsMenuOpenHandler(setDropdownReceivingCoin, state)}
                    />
                </div>
                <button
                    className="bg-btns rounded-xl py-3 text-xl"
                >
                    Создать
                </button>
            </div>
        </div>
    );
}