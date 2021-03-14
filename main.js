import * as converter from "./convert.js";

let currenciesFromElement = document.getElementById("currenciesFrom");
const currenciesToElement = document.getElementById("currenciesTo");

const currencyFromElement = document.getElementById("currencyFrom");
const currencyToElement = document.getElementById("currencyTo");

const amountElement = document.getElementById("amount");
const amountConvertedElement = document.getElementById("amountConverted");

document.addEventListener("DOMContentLoaded", () => {
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
    const errors = [];
    
    if (currencyFromElement.value === currencyToElement.value) {
        if (!errors.find((error) => error.code === "CURRENCIES_IDENTICAL")) {
            errors.push({
                code: "CURRENCIES_IDENTICAL",
                message: "Merci de selectionner deux devises différentes",
            });
        }
    }

    if (amountElement.value.trim().length === 0) {
        if (!errors.find((error) => error.code === "AMOUNT_EMPTY")) {
            errors.push({
                code: "AMOUNT_EMPTY",
                message: "Merci de saisir un montant à convertir",
            });
        }
    }

    if (errors.length === 0) {
        converter
            .convert(amountElement.value.replace(",", "."), currencyFromElement.value, currencyToElement.value)
            .then((result) => {
                const symbol = document.querySelector('#currenciesTo option[value="' + currencyToElement.value + '"]')
                    .dataset.symbol;
                amountConvertedElement.textContent = result + " " + symbol;
            })
            .catch((error) => console.log(error));
    } else if (errors.length <= 2) {
        const errorElement = document.querySelector(".alertError");
        const ul = document.createElement("ul");
        errors.forEach((error) => {
            const li = document.createElement("li");
            li.textContent = error.message;
            ul.appendChild(li);
            errorElement.appendChild(ul);
            errorElement.style.display = "block";
        });

        setTimeout(() => {
            errorElement.style.display = "none";
            errorElement.innerHTML = "";
        }, 5000);
    }
});

function loadDataListCurrencies(datalistElement, currencies) {
    for (let currency of currencies) {
        const option = document.createElement("option");
        option.value = currency.id;
        option.textContent = currency.name;
        option.insertAdjacentText;
        option.dataset.symbol = currency.symbol;
        datalistElement.appendChild(option);
    }

    return datalistElement;
}
