const API_URL = "https://free.currconv.com/api/v7/";
//const API_KEY = "d025732c1229201bbf62";
const API_KEY = "1938b23e531ac6d26078";

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
            }
            localStorage.setItem('currencies', JSON.stringify(currencies));
            return currencies;
        })
        .catch((error) => error);
}

export function convert(amount, from, to) {
    const queryParameter = from + "_" + to;
    return fetch(API_URL + "convert?q=" + queryParameter + "&compact=ultra&apiKey=" + API_KEY)
        .then(response => response.json())
        .then(data => {
            const amountConverted = data[queryParameter] * amount;
            return amountConverted.toFixed(2);
        })
        .catch(error => console.warn(error));
}
