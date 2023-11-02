import { TransactionsItem } from './TransactionsItem';
import btc from '../images/coins/btc.svg';
import eth from '../images/coins/eth.svg';
export const Transactions = () => {
  return (
    <section className='flex flex-col bg-trans-bg-img bg-right-bottom bg-no-repeat'>
      <h2 className="text-center font-bold text-4xl font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-12 mb-10 self-center">
        Последние транзакции
      </h2>
      <ul className="flex flex-col items-center">
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
        <TransactionsItem firstCoin={btc} secondCoin={eth} time={10}/>
      </ul>
    </section>
  );
};
