import { useState } from "react";

import plus from "../images/faq-plus.svg";
import minus from "../images/faq-minus.svg";

export const FaqSeqtionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row items-center mb-4">
      <div className="flex flex-col justify-start text-left w-full">
        <h3 className="text-3xl font-bold mb-1">{question}</h3>
        {isOpen && <p className="text-base">{answer}</p>}
      </div>
      <button className="w-12 h-12" type="button">
        <img src={isOpen ? minus : plus} alt="иконка переключения секции FAQ" onClick={() => setIsOpen((prev) => !prev)}>
        </img>
      </button>
    </div>
  );
};
