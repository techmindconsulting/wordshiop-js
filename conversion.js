document.getElementById("btn-convertir").addEventListener("click", convertir);

const tauxDevise = {
    eur: {
        dol: 1.2,
        yen: 126.97,
        liv: 0.88,
        cfa: 492.47,
        chf: 1.08,
    },
    dol: {
        eur: 0.83,
        yen: 105.36,
        liv: 0.73,
        cfa: 547.5,
        chf: 0.9,
    },
    liv: {
        dol: 1.37,
        eur: 0.83,
        yen: 105.36,
        cfa: 547.5,
        chf: 0.9,
    },
    yen: {
        dol: 0.0095,
        eur: 0.0079,
        liv: 0.0069,
        cfa: 5.2,
        chf: 0.00853,
    },
    cfa: {
        dol: 0.0018,
        eur: 0.0015,
        liv: 0.0013,
        yen: 0.19,
        chf: 0.0016,
    },
    chf: {
        dol: 1.11,
        eur: 0.92,
        liv: 0.81,
        cfa: 608.96,
        yen: 117.18,
    },
};

function convertir() {
    const montant = document.getElementById("montant");
    const devise1 = document.getElementById("devise-1");
    const devise2 = document.getElementById("devise-2");

    if (devise1.value !== devise2.value) {
        const texteDevise = devise2.options[devise2.selectedIndex].text;
        const resultat = montant.value * tauxDevise[devise1.value][devise2.value];

        document.getElementById("resultat").textContent = resultat.toFixed(2) + ' ' + texteDevise;
        document.getElementById("resultat").style.margin = "10px 0";
    } else {
        alert("Merci de selectionner des devises différentes");
    }
}
