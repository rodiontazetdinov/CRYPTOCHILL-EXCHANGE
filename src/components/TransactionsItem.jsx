import arrow from '../images/purple-arrow.svg';
import timeImg from '../images/icons/time-icon.svg';
export const TransactionsItem = ({firstCoin, secondCoin, time}) => {
  return (
    <div className="bg-order flex flex-row items-center rounded-3xl p-6 w-full justify-between mb-4 max-w-1328 mx-14">
      <p className="text-xl font-semibold w-60">Несколько секунд назад</p>
      <div className='flex flex-row items-center w-60'>
        <p className='mr-2'>0.031</p>
        <p className='mr-2'>BTC</p>
        <img className='mr-2' src={firstCoin} alt="коин"/>
        <img className='mr-2' src={arrow} alt="стрелка "/>
        <img className='mr-2' src={secondCoin}alt="коин"/>
        <p className='mr-2'></p>
      </div>
      <div className='flex flex-row items-center justify-end w-60'>
        <img className='mr-2' src={timeImg} />{time} min</div>
    </div>
  );
};
