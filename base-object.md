# TD : Les bases de l'objet

### Exercice 1

Un objet est fourni et votre tache est de: 
* stocker la valeur de la propriété `name` dans une variable `dogName` en utilisant la notation entre crochets.
* exécuter la méthode greeting() en utilisant la notation avec le point. (il affichera un message dans la console du navigateur)
* Mettez à jour la valeur de la propriété couleur.
* Le nom et couleur du chat doivent apparaitre à l'écran 

### html

```html
<section>
</section>
```

### javascript

```javascript
let dog = {
  name : 'Snoppy',
  breed : 'Caniche',
  color : 'blanc',
  greeting: function() {
    console.log('Wouf!');
  }
}

// Ecrire votre code

// Ne pas editer
const section = document.querySelector('section');
let paragraphe1 = document.createElement('p');
let paragraphe2 = document.createElement('p');

paragraphe1.textContent = `Le nom du chien est ${ dogName }.`;
paragraphe2.textContent = `La couleur du chien est ${ dog.color }.`;

section.appendChild(paragraphe1);
section.appendChild(paragraphe2);
```

### Exercice 2

Créer votre propre objet littéral pour représenter l'un de vos groupes préférés. Les propriétés requises sont:

* `name`: une chaîne représentant le nom du groupe.
* `nationality`: Une chaîne représentant le pays d'origine du groupe.
* `genre`:  quel type de musique le groupe joue.
* `members`: un nombre représentant le nombre de membres du groupe.
* `formed`: un nombre représentant l'année de formation du groupe.
* `albums`: Un tableau représentant les albums publiés par le groupe. 
Chaque élément du tableau doit être un objet contenant les propriétés suivantes:
	* `name`: une chaîne représentant le nom de l'album.
	* `released`: Un nombre représentant l'année de sortie de l'album.

Incluez au moins deux albums dans le tableau des albums.

Vous devez ensuite écrire une chaîne dans la variable `bandInfo`, qui contiendra une petite biographie détaillant leur *nom*, *nationalité*, *années d'activité* et *style*, ainsi que le *titre* et la *date de sortie de leur premier album*.

### html
```html
<section>
</section>
```

### javascript
```javascript
let bandInfo;

// Votre code


// Ne pas editer
const section = document.querySelector('section');
let paragraphe = document.createElement('p');
paragraphe.textContent = bandInfo;
section.appendChild(paragraphe);
```

### Exercice 3

Reprenez l'objet de l'exercice afin de modifier la méthode `greeting` 
L'objectif est d'afficher `Bonjour, dit Snoppy le caniche`
Créer votre propre objet  ayant la même structure que l'exercice 1 et exécuter la méthode `greeting` 
