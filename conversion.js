document.getElementById("btn-convertir").addEventListener("click", convertir);

const montant = document.getElementById('montant');
const devise1 = document.getElementById("devise-1");
const devise2 = document.getElementById("devise-2");
const resulat = document.getElementById('resultat');

defaultOption = document.createElement("option");
defaultOption.text = "Choisir une devise";

devise1.add(defaultOption);

const rateCurrencies = [];

const API_URL = 'https://free.currconv.com/api/v7/';
const API_KEY = 'd025732c1229201bbf62';

function loadCurrencies() {
    fetch(API_URL + 'currencies?apiKey=' + API_KEY)
    .then( (response) => {
        if (response.status !== 200) {
            alert('Erreur API');
            return;
        }

        response.json().then( (currencies) => {
           for(index in currencies.results) {
               option = document.createElement('option');
               option.value = currencies.results[index].id;
               option.text = currencies.results[index].currencyName;
               devise1.add(option);
               devise2.innerHTML = devise1.innerHTML;
            }
        })
    }); 
}


function convertir() {
    const queryParameter = devise1.value + '_' + devise2.value;
    fetch(API_URL + 'convert?q=' +  queryParameter + '&compact=ultra&apiKey=' + API_KEY)
    .then((response) => response.json())
    .then( (data) => {
        amountConverted = data[queryParameter] * montant.value;
        resulat.textContent = amountConverted.toFixed(2);
    } )
}
loadCurrencies();
