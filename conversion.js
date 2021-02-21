document.getElementById("btn-convertir").addEventListener("click", convertir);

const devise1 = document.getElementById("devise-1");
const devise2 = document.getElementById("devise-2");

defaultOption = document.createElement("option");
defaultOption.text = "Choisir une devise";

devise1.add(defaultOption);

const rateCurrencies = [];
fetch("https://restcountries.eu/rest/v2/all?fields=currencies")
    .then((response) => {
        if (response.status !== 200) {
            alert("Erreur API");
            return;
        }
        response.json().then((currencies) => {
            currencies.forEach((element) => {
                option = document.createElement("option");
                option.text = element.currencies[0].name;
                option.value = element.currencies[0].code;
                devise1.add(option);
            });
        });
    })
    .catch((error) => {
        console.log("Erreur API", error);
    });

function convertir() {
    const montant = document.getElementById("montant");

    if (devise1.value !== devise2.value) {
        const texteDevise = devise2.options[devise2.selectedIndex].text;
        const resultat = montant.value * tauxDevise[devise1.value][devise2.value];

        document.getElementById("resultat").textContent = resultat.toFixed(2) + " " + texteDevise;
        document.getElementById("resultat").style.margin = "10px 0";
    } else {
        alert("Merci de selectionner des devises différentes");
    }
}
