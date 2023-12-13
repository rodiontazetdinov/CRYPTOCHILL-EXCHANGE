import { MAIN_URL } from './constants'
console.log(MAIN_URL)
class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    /**
     * Retrieves the list of currencies.
     * @returns {Promise} A promise that resolves with the list of currencies.
     */
    getCurrencies() {
        return this._request(`${this._baseUrl}/ccies`, {
            method: 'POST',
            headers: this._headers,
        });
    }
    // принимает объект {"fromCcy":"BTC", "toCcy":"USDTTRC", "amount":0.5, "direction":"from", "type":"float"}'
    getPrice(body) {
        return this._request(`${this._baseUrl}/price`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        });
    }
    // принимает объект {"fromCcy":"BTC", "toCcy":"USDTTRC", "amount":0.5, "direction":"from", "type":"float", "toAddress":"TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr"}
    createOrder(body) {
        return this._request(`${this._baseUrl}/create`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        });
    }
    
    // принимает объект {"id":"TESTID", "token":"TESTTOKENvRB90NOtr397kHY3PJ1VRy2p29HHaN7"}
    getOrder(body) {
        return this._request(`${this._baseUrl}/order`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        });
    }
    // принимает объект {"id":"TESTID", "token":"TESTTOKENvRB90NOtr397kHY3PJ1VRy2p29HHaN7", "choice":"EXCHANGE"}
    cancelOrder(body) {
        return this._request(`${this._baseUrl}/emergency`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        });
    }
    //принимает объект {"id":"TESTID", "token":"TESTTOKENvRB90NOtr397kHY3PJ1VRy2p29HHaN7", "email":"notifyme@gmail.com"}
    setEmail(body) {
        return this._request(`${this._baseUrl}/setEmail`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        });
    }
    // принимает объект {"id":"TESTID","token":"TESTTOKENvRB90NOtr397kHY3PJ1VRy2p29HHaN7","choice":"EXCHANGE"}
    getQr(body) {
        return this._request(`${this._baseUrl}/qr`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        });
    }
}

export const api = new Api({
    baseUrl: MAIN_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// createOrder()

// {
//     "id": "ZG3Y2F",
//     "type": "float",
//     "email": "",
//     "status": "NEW",
//     "time": {
//         "reg": 1701328456,
//         "start": null,
//         "finish": null,
//         "update": 1701328456,
//         "expiration": 1701330256,
//         "left": 1800
//     },
//     "from": {
//         "code": "BTC",
//         "coin": "BTC",
//         "network": "BTC",
//         "name": "Bitcoin",
//         "alias": "bitcoin",
//         "amount": "0.50000000",
//         "address": "bc1q0elzn0s46p3jyg3d7d0pkpdwldy6ggsygjz228",
//         "addressAlt": null,
//         "tag": "",
//         "tagName": null,
//         "reqConfirmations": 1,
//         "maxConfirmations": 6,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "to": {
//         "code": "USDTTRC",
//         "coin": "USDT",
//         "network": "TRX",
//         "name": "Tether (TRC20)",
//         "alias": "usdt",
//         "amount": "18847.10200000",
//         "address": "TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr",
//         "tag": "",
//         "tagName": null,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "back": {
//         "code": "",
//         "coin": null,
//         "network": null,
//         "name": null,
//         "alias": null,
//         "amount": null,
//         "address": "",
//         "tag": "",
//         "tagName": null,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "emergency": {
//         "status": [],
//         "choice": "NONE",
//         "repeat": "0"
//     },
//     "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd"
// }

// getOrder()

// {
//     "id": "ZG3Y2F",
//     "type": "float",
//     "email": "",
//     "status": "NEW",
//     "time": {
//         "reg": 1701328456,
//         "start": null,
//         "finish": null,
//         "update": 1701328456,
//         "expiration": 1701330256,
//         "left": 1520
//     },
//     "from": {
//         "code": "BTC",
//         "coin": "BTC",
//         "network": "BTC",
//         "name": "Bitcoin",
//         "alias": "bitcoin",
//         "amount": "0.50000000",
//         "address": "bc1q0elzn0s46p3jyg3d7d0pkpdwldy6ggsygjz228",
//         "addressAlt": null,
//         "tag": "",
//         "tagName": null,
//         "reqConfirmations": 1,
//         "maxConfirmations": 6,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "to": {
//         "code": "USDTTRC",
//         "coin": "USDT",
//         "network": "TRX",
//         "name": "Tether (TRC20)",
//         "alias": "usdt",
//         "amount": "18847.10200000",
//         "address": "TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr",
//         "tag": "",
//         "tagName": null,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "back": {
//         "code": "",
//         "coin": null,
//         "network": null,
//         "name": null,
//         "alias": null,
//         "amount": null,
//         "address": "",
//         "tag": "",
//         "tagName": null,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "emergency": {
//         "status": [],
//         "choice": "NONE",
//         "repeat": "0"
//     },
//     "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd"
// }

// getQr()

// [
//     {
//         "title": "With amount",
//         "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAAECAQMAAAAvgUsTAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAilJREFUaIHdmdFtxDAMQwV4gIzk1T1SBjCgWiSV9HALlA2K4hy/+xAk05Qu4h89I+uJK/e1dsS+Mu+Z99mZtXFbEVjEtQ66Y268GQXN4K4TUYuzzTQh4FXBR710JM6rgirmNeoLy5cYKrt1Cm+w+CwJLG6cH+515j7q1ILA+8rW19+HfjgQz3MO0sncUTqmcH/L998nLh0hboxOXlUkxM6KyNqAUkMj1qMXnTknggVX0iZRKI3QMbMisI203Yi8ssUqrCvWjmDAlTOcqPNWeg3f40Ww8qJ0IRgk9/LJnAnBUBUYXA7/t3WzIlB/ZaMhDVs3a9UfAnYiaKAT5gamrauwjhmC9yHY20Daqr0JhF1mOhSzEQEhYGMzZQvuyBYLLwLhLaQQr2AICnqNjg9BdYOu8Qs0OvtyJCYWaqQDjTR70VfpTIihBQ1osAQpEHRyRoSOEGLTWcIy788byIEYjxZIrDMo5ZeCdyJ0flJViCZhqyNdXoS6AqSNn3frxVAVOhE4P2v3KFNVmKttnA3xa2QWz4ce1qgKbQhKwMWrlEqtnnNwsuZDhMSuLI4ebLSr9iJm67fGf2rYcMumFcGu4NE7qnaHHV4EHw5rOJzdMjrRsxwbglPaoGlrlH66z5wPofqbnDdt/rCRkvI0I2a7HBEbc1vG3Fl1InjfbFkcNKJ1m+YbrRGhzlN9GsboFaobIeGm6cxX8ta2I6QOuWU9dZVyOqC5lAnxj54feFFUvtQgksAAAAAASUVORK5CYII=",
//         "checked": true
//     },
//     {
//         "title": "Address",
//         "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADqAQMAAACWWksNAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAeNJREFUWIXVmdGNxCAMRC1RACXROiVRABLnmTHRXiqYoN2I5OU+vLaHgYv47GgHoy1M2ho53/mQk7O8cX5j5P3uuOdn5JMQssYD953xMMic7PwDRvsBnAOBMRNnxocwAsMVk/4VHCydCg9R5UuvWvPE1cDj9Xn1tyGu0adKP0PKlPwAY8zSUSbyupmehk4IvuSMVffBeuI1M3RmVtIOc5wJUPVMyWU9UQMbY/z6ec9gNtIwtvLU5wcwheYmJvRSXOnxxUtZge7nqwrssJJ2WGOJztZCxUpSMV3R9MXo1SwjLq4UTYSK9PTbBsZ4U3TUBgLnumFnrAaQj2wqqRVX991xxkD1mfQJUH8Zyra8cZ+lPnzK/RKlp5TIGZ8ywXSQFCDMn3XMF0ctrrVromg+im+OaSLn7net5WY1rqG0xRVJh26qe6X76mprDEOD6tnoh5LLR/etMdNSWak40QzyOt546JHSIJcTFaQ5rsMjrVVVXnhvlF/zxdyd0hOUfadioqqWNdbQ1pq2AIurPHGENa5DDRrK69qfow1vXAdJtUHViYac5XHHOvwacu1SzPNba+aYJ9R1lkTdiWcdM8c6duxVUshQbZmccSgf7IQjl3P+L7GmmJVDs17/1dApGNXHGn92/AHg4emKT+bUzAAAAABJRU5ErkJggg=="
//     }
// ]

// getOrder()

// {
//     "id": "ZG3Y2F",
//     "type": "float",
//     "email": "tweakymoo@gmail.com",
//     "status": "NEW",
//     "time": {
//         "reg": 1701328456,
//         "start": null,
//         "finish": null,
//         "update": 1701328456,
//         "expiration": 1701330256,
//         "left": 1332
//     },
//     "from": {
//         "code": "BTC",
//         "coin": "BTC",
//         "network": "BTC",
//         "name": "Bitcoin",
//         "alias": "bitcoin",
//         "amount": "0.50000000",
//         "address": "bc1q0elzn0s46p3jyg3d7d0pkpdwldy6ggsygjz228",
//         "addressAlt": null,
//         "tag": "",
//         "tagName": null,
//         "reqConfirmations": 1,
//         "maxConfirmations": 6,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "to": {
//         "code": "USDTTRC",
//         "coin": "USDT",
//         "network": "TRX",
//         "name": "Tether (TRC20)",
//         "alias": "usdt",
//         "amount": "18847.10200000",
//         "address": "TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr",
//         "tag": "",
//         "tagName": null,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "back": {
//         "code": "",
//         "coin": null,
//         "network": null,
//         "name": null,
//         "alias": null,
//         "amount": null,
//         "address": "",
//         "tag": "",
//         "tagName": null,
//         "tx": {
//             "id": null,
//             "amount": null,
//             "fee": null,
//             "ccyfee": null,
//             "timeReg": null,
//             "timeBlock": null,
//             "confirmations": null
//         }
//     },
//     "emergency": {
//         "status": [],
//         "choice": "NONE",
//         "repeat": "0"
//     },
//     "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd"
// }