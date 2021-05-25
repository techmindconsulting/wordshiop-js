# TD : Plats préférés

Vous avez une chaîne de caractères sur laquelle figure des personnages de jeu video.
Modifier le programmee afin que les informations suivantes puissent s'afficher :
- La liste des personnages de manière horizontale
- La longeur du tableau
- Le dernier élément du tableau

### html

```html
<section>
</section>
```

### javascript

```javascript

// Ajouter votre code


// Ne pas editer ce code
section = document.querySelector('section');
section.innerHTML = ' ';
let paragraphe1 = document.createElement('p');
paragraphe1.textContent = `Tableau: ${ myArray }`;

let paragraphe2 = document.createElement('p');
paragraphe2.textContent = `La longueur du tableau est de ${ myArrayLength }.`;

let paragraphe3 = document.createElement('p');
paragraphe3.textContent = `Le derner éléménet du tableau est "${ lastItem }".`;

section.appendChild(paragraphe1);
section.appendChild(paragraphe2);
section.appendChild(paragraphe3);
    
    
```
