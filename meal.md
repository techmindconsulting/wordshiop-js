# TD : Plats préférés

Créer un tableau avec trois éléments correspondant à une liste de plats. 

Modifier les deux premiers éléments du tableau. 

Enfin ajoutez un nouveau plat au début du tableau.

### html

```html
<section>
</section>
```

### javascript

```
// Ajouter votre ici

// Vous n'avez pas besoin de modifier le code ci dessous
const section = document.querySelector('section');

let paragraph = document.createElement('p');
paragraph.textContent = `Mes plats: ${ mesPlats }`;

section.appendChild(paragraph);
    
```
