import { Routes, Route } from 'react-router-dom';
import { PageInfo } from '../components/account/PageInfo';
import { PageExchangeHistory } from '../components/account/PageExchangeHistory';
import { PageAddressBook } from '../components/account/PageAddressBook';
import { PagePartner } from '../components/account/PagePartner';
import { AccountWrapper } from '../components/account/AccountWrapper';
import { PageMoneyBack } from '../components/account/PageMoneyBack';
import { PageApiManagement } from '../components/account/PageApiManagement';


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
            {
                id: 'ggyH453',
                time: '2022-11-08T17:33:04.394Z',
                sent: {name: 'ETH', sum: 24},
                get: {name: 'BTC', sum: 0.9999000009},
                status: 'Выполнен',
                address: 'ght753jg65hgndhtjyjjjdjtjfjtjg32'
            },
            {
                id: 'ggyH453',
                time: '2022-11-08T17:33:04.394Z',
                sent: {name: 'ETH', sum: 24},
                get: {name: 'BTC', sum: 0.9999000009},
                status: 'Выполнен',
                address: 'ght753jg65hgndhtjyjjjdjtjfjtjg32'
            },
            {
                id: 'ttestyH453',
                time: '2022-11-08T10:33:04.394Z',
                sent: {name: 'ETH', sum: 24},
                get: {name: 'BTC', sum: 0.9999000009},
                status: 'Ожидается',
                address: 'ght753jg65hgndhtjyjjjdjtjfjtjg32'
            },
            {
                id: 'ttestyH453',
                time: '2022-11-08T10:33:04.394Z',
                sent: {name: 'ETH', sum: 24},
                get: {name: 'BTC', sum: 0.9999000009},
                status: 'Ожидается',
                address: 'ght753jg65hgndhtjyjjjdjtjfjtjg32'
            },
        ],
        addresBook: [
            {
                id: 'ggyH453',
                time: '2022-11-08T17:33:04.394Z',
                sent: {name: 'ETH', sum: 24},
                get: {name: 'BTC', sum: 0.99990000009},
                status: 'Ожидается',
                address: 'ght753jg65hgndhtjyjjjdjtjfjtjg32'
            },
            {
                id: 'ggyH453',
                time: '2022-11-08T17:33:04.394Z',
                sent: {name: 'ETH', sum: 24},
                get: {name: 'BTC', sum: 0.99990000009},
                status: 'Ожидается',
                address: 'ght753jg65hgndhtjyjjjdjtjfjtjg32'
            },
        ]
    }

    return (
        <Routes>
            <Route element={<AccountWrapper />}>
                <Route index element={<PageInfo user={userDataJSON}/>} />
                <Route path="history" element={<PageExchangeHistory user={userDataJSON}/>} />
                <Route path="adress-book" element={<PageAddressBook user={userDataJSON}/>} />
                <Route path="partner" element={<PagePartner user={userDataJSON}/>} />
                <Route path="money-back" element={<PageMoneyBack user={userDataJSON}/>} />
                <Route path="api-management" element={<PageApiManagement user={userDataJSON}/>} />
            </Route>
        </Routes>
    );
}