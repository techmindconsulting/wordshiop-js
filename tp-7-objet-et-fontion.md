## TP 7 -  Les objets et fonctions

Concernant les exercices sur les objets, ne pas hésiter à consulter la documentation
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object

### A faire sur un environnement en ligne JS (codepen)

#### -  Exercice 1

Ecrire un programme qui liste les propriétés de cette objet.

```javascript
let student = {
  fullname: "John Doe",
  classname: "Seconde A",
  age: 15
};
```
Le programme doit renvoyer `fullname,classname, age`

#### -  Exercice 2

Ecrire un programme qui liste les valeurs de cette objet.

```javascript
let student = {
  fullname: "John Doe",
  classname: "Seconde A",
  age: 15
};
```
Le programme doit renvoyer `John Doe, Seconde A, 15`


#### -  Exercice 3
Ecrire un programme qui supprime la propriété age de l'objet student. Afficher l'objet avant et aprés suppression de la propriété.

```javascript
let student = {
  fullname: "John Doe",
  classname: "Seconde A",
  age: 15
};
```

#### -  Exercice 4
Ecrire un programe qui donne la longueur de l'objet student. Le programme doit retourner 3

#### -  Exercice 5
Ecrire un programme qui affiche le statut du livre s'ils ont été lu ou pas.

```javascript
let library = [ 
   {
       author: 'Gustave Flaubert',
       title: 'Madame Bovary',
       readingStatus: true
   },
   {
       author: 'Victor Hugo',
       title: 'Les misérables',
       readingStatus: true
   },
   {
       author: 'Guy de Maupassant',
       title:  'Bel ami', 
       readingStatus: false
   }];
```

```console
Madame de Bovary de Gustave Flaubert a été lu.
Les misérables de Victor Hugo a été lu.
Bel ami de Guy de Maupassant n'a pas été lu.
``` 

#### -  Exercice 6
Écrire une fonction displayNumbers(from, to) qui affiche un nombre par seconde, en partant de from jusqu’à to.


#### -  Exercice 7
Dans le code ci-dessous il y a une exécution planifié par setTimeout, suivie par un calcul conséquent qui prend plus de 100ms à tourner.

Quand la fonction planifiée va-t-elle s’exécuter ?

1. Après la boucle.
2. Avant la boucle.
3. Au début de la boucle.

Qu’est-ce que console.log va afficher ?

```javascript
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// on considère que cette fonction met plus de 100ms à s'exécuter
for(let j = 0; j < 100000000; j++) {
  i++;
}
```

#### -  Exercice 8
Ecrire une fonction récursive power qui prend en paramètre deux entiers:
Le premier est le nombre sur lequel effectué l'opération
Le second est l'exposant

```javascript
function power(number, exponent) {
  
}
console.log(power(2, 5)) // 32
```
#### -  Exercice 9
Ecrire la fonction isEmpty(obj) qui renvoie true si l’objet n’a pas de propriétés, sinon false
```javascript

let person = {};
console.log( isEmpty(person) ); // true

person["name"] = "John Doe";
alert( isEmpty(schedule) ); // false
```

#### -  Exercice 10
Nous avons un objet stockant les salaires de notre équipe :
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 140
}
```
Écrire le code pour additionner tous les salaires et les enregistrer dans la variable total. 
console.log(sum); 

Si salaries est vide, le résultat doit être 0.

#### - Exercice 11

Répondez aux questions suivantes.

1 -A quoi sert une fonction constructeur ?

2- À quoi sert le nouveau mot-clé `new`?

3 - À quoi le mot-clé `this` fait-il référence à l'intérieur d'une fonction constructeur?

4 - Qu'est-ce qu'une instance ?

5 - Créez une fonction constructeur pour créer une personne, chaque personne doit avoir un prénom, un nom, une couleur favorite et un numéro favori.

6 - Écrire une méthode appelée `sumFavoriteNumber` qui prend un nombre et renvoie la somme du nombre et du nombre préféré de la personne
