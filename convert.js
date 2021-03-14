const API_URL = "https://free.currconv.com/api/v7/";
const API_KEY = "3ae6cf868d57eaf75ef8";

export function getCurrencies() {
    return fetch(API_URL + "currencies?apiKey=" + API_KEY)
        .then(response => response.json())
        .then(data => {
            const currencies = [];
            for (let item in data.results) {
                let currency = {
                    id: item,
                    name: data.results[item].currencyName,
                    symbol: data.results[item].currencySymbol ?? data.results[item].currencyName,
                };
                currencies.push(currency);
                currencies.sort((currency1, currency2) => {
                    return currency1.name > currency2.name ? 1 : -1;
                });
            }
            localStorage.setItem('currencies', JSON.stringify(currencies));
            return currencies;
        })
        .catch((error) => error);
}

export function convert(amount, from, to) {
    const queryParameter = from + "_" + to;
    return fetch(API_URL + "convert?q=" + queryParameter + "&compact=ultra&apiKey=" + API_KEY)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const amountConverted = data[queryParameter] * amount;
            return amountConverted.toFixed(2);
        })
        .catch(error => error);
}
