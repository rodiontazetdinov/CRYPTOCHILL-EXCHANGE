import { Routes, Route } from 'react-router-dom';
import { PageInfo } from '../components/account/PageInfo';
import { PageExchangeHistory } from '../components/account/PageExchangeHistory';
import { PageAddressBook } from '../components/account/PageAddressBook';
import { AccountWrapper } from '../components/account/AccountWrapper';


export const Account = () => {
    // Данные с сервера:
    const userDataJSON = {
        email: 'test@test.ru',
        verifiedEmail: false,
        alarmEmail: false,
        password: 'test123',
        registrationDate: '2020-11-08T10:33:04.394Z',
        dateLastVisit: new Date(new Date() - 1000).toISOString(),
        history: [
        ],
    }

    return (
        <Routes>
            <Route element={<AccountWrapper />}>
                <Route index element={<PageInfo user={userDataJSON}/>} />
                <Route path="history" element={<PageExchangeHistory user={userDataJSON}/>} />
                <Route path="adress-book" element={<PageAddressBook user={userDataJSON}/>} />
            </Route>
        </Routes>
    );
}