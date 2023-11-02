export const FaqSeqtionItem = ({ question, answer }) => {
    return (
    <div className="flex flex-row items-center mb-4">
        <div className="flex flex-col justify-start text-left w-full">
          <h3 className="text-3xl font-bold mb-1">{question}</h3>
          <p className="text-base">
            {answer}
          </p>
        </div>
        <button className="w-12 h-12" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect width="48" height="48" rx="24" fill="#08035B" />
            <rect x="12" y="22" width="24" height="4" rx="2" fill="#D7DFFF" />
          </svg>
        </button>
      </div>);
}