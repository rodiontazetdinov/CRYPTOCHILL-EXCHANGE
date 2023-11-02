

export const BenefitCard = ({ imageSrc, title, description }) => {
    return (
        <div className="bg-order flex flex-col items-start rounded-2xl p-6 mr-6 w-full last:mr-0 text-left">
            <img src={imageSrc} alt={title}/>
            <p className="text-3xl font-bold mt-4">{title}</p>
            <p className="mt-2 text-xl font-semibold">{description}</p>
        </div>
    );
}