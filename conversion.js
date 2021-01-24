/* Fonction qui est appelé sur l'évenement utilisateur onClick */

function convertir() {
   /* Déclaration de variable */
    const CURRENCY_DOLLAR = 1.2077; // TAUX DE CHANGE
    const CURRENCY_STERLING = 0.8919; // TAUX DE CHANGE
    const CURRENCY_YEN = 126.34; // TAUX DE CHANGE
    const CURRENCY_CFA = 491; // TAUX DE CHANGE
    const CURRENCY_CHF = 1.07745; // TAUX DE CHANGE

    // Parcourir le DOM (Document Object Model) afin de récuperer un élement HTML
    // Récupérer un élément HTML à l'aide d'un ID (Ex: amount)
    let amount = document.getElementById('amount').value;

    /* Affichage dans le document HTML */
    // '+' Concaténation

    document.getElementById('resultat_us').innerText = amount * CURRENCY_DOLLAR + ' $';
    document.getElementById('resultat_gb').innerText = amount * CURRENCY_STERLING + ' £';
    document.getElementById('resultat_jp').innerText = amount * CURRENCY_YEN + ' JPY';
    document.getElementById('resultat_km').innerText = amount * CURRENCY_CFA + '  FCFA';
    document.getElementById('resultat_ch').innerText = amount * CURRENCY_CHF + ' CHF';

    // Appliquer style CSS à l'aide de la classe
    document.querySelectorAll('p.result').forEach( el => {
        el.style.border =  "3px solid green";
        el.style.margin = "10px 0";
    })
    
}