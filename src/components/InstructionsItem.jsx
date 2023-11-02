
export const InstructionsItem = ({ title, description, imgLink}) => {
  return (
    <div className="flex flex-col justify-left w-full bg-order p-4 rounded-lg">
        <img className="w-20 h-20" src={imgLink} alt={title}/>
        <h3 className="text-2xl font-semibold max-w-[350px] mt-4 text-left">{title}</h3>
        <p className="mt-2 text-left text-base">{description}</p>
        <button className="font-semibold text-xl px-4 py-3 bg-btns rounded-lg self-left w-28 mt-4 mb-8">Читать</button>
    </div>
  );
};
