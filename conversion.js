/* Fonction qui est appelé sur l'évenement utilisateur onClick */
function convertir() {
   /* Déclaration de variable */
    const CURRENCY_DOLLAR = 1.2077;
    let resultat;
    let amount = document.getElementById('amount').value;

    /* Opération de converssion */
    resultat = amount * CURRENCY_DOLLAR;

    /* Affichage dans le document HTML */
    document.getElementById('resultat').innerText = resultat + ' $';
}

