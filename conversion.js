/* Fonction qui est appelé sur l'évenement utilisateur onClick */

document.getElementById('btn-convertir').addEventListener('click', convertir);

function convertir() {

    // Parcourir le DOM (Document Object Model) afin de récuperer un élement HTML
    // Récupérer un élément HTML à l'aide d'un ID (Ex: amount)
    const amount = document.getElementById('amount').value;

    const rateSelect = document.getElementById('rate');
    const rate = rateSelect.value;
    
    console.log(rateSelect.options);

    const currency = rateSelect.options[rateSelect.selectedIndex].text;
    
    const resultat = amount * rate;
    
    document.getElementById('resultat').innerText = resultat.toFixed(2) +  ` ${currency}`;

    // Appliquer style CSS à l'aide de la classe
 /*   document.querySelectorAll('p.result').forEach( el => {
        el.style.border =  "3px solid green";
        el.style.margin = "10px 0";
    });*/
    
}