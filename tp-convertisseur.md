
# TP : Convertisseur de devises

### Partie 1

En s'inspirant du design du convertisseur de Boursorama, vous devez développer une web app  qui permet de convertir d'une devise à une autre selon l'objet des devises qui vous sera fournit

https://www.boursorama.com/bourse/devises/convertisseur-devises/

### javascript
Vous devez vous servir de cette objet pour toute vos opérations 
```javascript
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

```

Documentation : https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement

### Partie 2 

L'objet de devise devra être remplacé par une API et les conversions précédemment effectuées devront être historisés et visible à l'écran

API à utiliser :
https://free.currencyconverterapi.com/
