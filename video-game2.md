# TD : Jeu vidéo bis

Voici un autre tableau de personnage d'un jeu vidéo et voici ce que vous devez faire.


Vous devez les afficher de cette manière.

```
Ryu (3) - Ken (3) - Chun-Li (7) - Cammy (5) - Guile (5) - Sakura (6) - Sagat (5) - Bison (5) - Vega (4)
```

L'indice correspond au nombre de caractère que possède un nom de personnage.

Exemple `Ryu (3)` car il y a 3 lettres dans `Ryu`

### html

```html
<section>
</section>
```

### javascript

```javascript

// Ne pas editer ce code
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Ajouter votre code

// Ne pas editer ce code
const section = document.querySelector('section');

let paragraphe = document.createElement('p');
paragraphe.textContent = myString;

section.appendChild(paragraphe);
    
```
