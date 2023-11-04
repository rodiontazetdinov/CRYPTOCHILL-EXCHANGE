export const SuppportCard = ({title, text, icon, onClick, mr="mr-6", mb="mb-6"}) => {
    let classForCard = `bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl w-[314px] px-4 py-6 ${mr} ${mb}`;
    return (
        <li className={classForCard}>
            <div className="flex items-center mb-2">
                <div className="rounded-full bg-gradient-to-r from-[#38096780] to-[#7811C580] p-2 mr-2">
                    <img src={icon} alt="Иконка соцсети" />
                </div>
                <p className="text-2xl text-transparent bg-text bg-clip-text">{title}</p>
            </div>
            <p className="mb-4">{text}</p>
            <button 
                className="bg-btns w-32 h-12 px-4 py-3 rounded-xl text-xl"
                onClick={onClick}
            >
                Написать
            </button>
        </li>
    );
  };