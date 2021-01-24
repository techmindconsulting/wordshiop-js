/* Fonction qui est appelé sur l'évenement utilisateur onClick */

function convertir() {
   /* Déclaration de variable */
    const CURRENCY_DOLLAR = 1.2077; // TAUX DE CHANGE

    // Parcourir le DOM (Document Object Model) afin de récuperer un élement HTML
    // Récupérer un élément HTML à l'aide d'un ID (Ex: amount)
    let amount = document.getElementById('amount').value;

    /* Affichage dans le document HTML */
    // '+' Concaténation
    let resulat = amount * CURRENCY_DOLLAR;
    document.getElementById('resultat_us').innerText = resulat + ' $';
}