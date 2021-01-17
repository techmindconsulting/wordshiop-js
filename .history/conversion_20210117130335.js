function convertir() {
    const CURRENCY = 1.2077;
    let resultat;
    let amount = document.getElementById('amount').value;
    resultat = amount * CURRENCY;

    document.getElementById('resulat').innerText = resultat;

}

