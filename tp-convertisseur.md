
# TP : Convertisseur de devises

### Enoncé

En inspirant du design du convertisseur de Boursorama, vous devez développer un web app  qui permet de convertir d'une devise à une autre selon le tableau des devises qui vous sera fournit

https://www.boursorama.com/bourse/devises/convertisseur-devises/


### javascript
Vous devez vous servir de cette objet pour toute vos opération de convertisseur
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
