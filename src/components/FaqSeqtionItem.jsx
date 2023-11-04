import { useState } from "react";


export const FaqSeqtionItem = ({ question, answer, count, fontSizeQuestion='text-3xl', fontSizeAnswer='text-base' }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  function handleOpen() {
    setIsAnswerOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-row mb-4 justify-between w-full">

      <div className="flex flex-col justify-start text-left w-full">
        <h3 className={fontSizeQuestion + " font-bold mb-1"}>
          {count && (
            <span className="mr-8 mb-4 inline-block">{count}</span>
          )}
          {question}
        </h3>
        {isAnswerOpen && (
          <p className={fontSizeAnswer}>
            {answer}
          </p>
        )}
      </div>

      <button 
        className="w-12 h-12"
        type="button"
        onClick={handleOpen}
      >
        {isAnswerOpen ? (
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
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="#08035B"/>
            <rect x="12" y="22" width="24" height="4" rx="2" fill="#D7DFFF"/>
            <rect x="26" y="12" width="24" height="4" rx="2" transform="rotate(90 26 12)" fill="#D7DFFF"/>
          </svg>
        )}
      </button>
    </div>);
}