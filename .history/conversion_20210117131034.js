function convertir() {
    /* Déclaration de variable */
    const CURRENCY = 1.2077;
    let resultat;
    let amount = document.getElementById('amount').value;
    
    /* Opération de converssion */
    resultat = amount * CURRENCY;

    /* Affichage dans le document HTML */
    document.getElementById('resultat').innerText = resultat + ' $';
}

