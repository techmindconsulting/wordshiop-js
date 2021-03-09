import * as converter from "./convert.js";

let currenciesFromElement = document.getElementById("currenciesFrom");
const currenciesToElement = document.getElementById("currenciesTo");

const currencyFromElement = document.getElementById("currencyFrom");
const currencyToElement = document.getElementById("currencyTo");

const amountElement = document.getElementById("amount");
const amountConvertedElement = document.getElementById("amountConverted");

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("currencies") === null) {
        converter.getCurrencies().then((currencies) => {
            currenciesFromElement = loadDataListCurrencies(currenciesFromElement, currencies);
            currenciesToElement.innerHTML = currenciesFromElement.innerHTML;
        });
    } else {
        const currencies = JSON.parse(localStorage.getItem("currencies"));
        currenciesFromElement = loadDataListCurrencies(currenciesFromElement, currencies);
        currenciesToElement.innerHTML = currenciesFromElement.innerHTML;
    }
});

document.getElementById("convertBtn").addEventListener("click", () => {
    converter.convert(
        amountElement.value.replace(',','.'), 
        currencyFromElement.value, 
        currencyToElement.value).then((result) => {
            const symbol = document.querySelector('#currenciesTo option[value="'+ currencyToElement.value + '"]').dataset.symbol;
            amountConvertedElement.textContent =
            result + " " + symbol;
    });
});

function loadDataListCurrencies(datalistElement, currencies) {
    for (let currency of currencies) {
        const option = document.createElement('option');
        option.value = currency.id;
        option.textContent = currency.name;
        option.dataset.symbol = currency.symbol;
        datalistElement.appendChild(option);
    }

    return datalistElement;
}
