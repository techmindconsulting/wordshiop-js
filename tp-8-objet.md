## TP 8 -  Les objets

Concernant les exercices sur les objets, ne pas hésiter à consulter la documentation
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object

### A faire sur une sandbox (codepen)

#### -  Exercice 1

Ecrire un programme qui liste les propriétés de cette objet.

```javascript
let student = {
  fullname: "John Doe",
  classname: "Seconde A",
  age: 15
};
```
Le programme doit renvoyer `fullname, classname, age`

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

Écrivez le code, une ligne pour chaque action :

1. Créer un objet vide user.
2. Ajoutez la propriété name avec la valeur John.
3. Ajoutez la propriété surname avec la valeur Smith.
4. Changer la valeur de name pour Pete.
5. Supprimez la propriété name de l’objet.

### - Exercice 7

Est-il possible de changer un objet déclaré avec const, comment ?

```javascript
const user = {
  name: "Linda"
};

// est-ce que ça fonctionne ?
user.name = "Sarah";
```

### - Exercice 8

Nous avons un objet stockant les salaires de notre équipe :

```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Écrivez le code pour additionner tous les salaires et les enregistrer dans la variable sum. Devrait être égale à 390 dans l’exemple ci-dessus.

Si salaries est vide, le résultat doit être 0.


### - Exercice 9

Ecrivez la fonction isEmpty(obj) qui renvoie true si l’objet n’a pas de propriétés, sinon false.

Devrait fonctionner comme ça :

```javascript
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

### - Exercice 10

Créez une fonction multiplyNumeric(obj) qui multiplie toutes les valeurs de propriétés numériques de obj par 2.

Par exemple :

```javascript
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

Veuillez noter que multiplyNumeric n’a pas besoin de retourner quoi que ce soit. Il devrait modifier l’objet en place.

P.S. Utilisez typeof pour rechercher un number ici.


#### - Exercice 11

Répondez aux questions suivantes.

1 -A quoi sert une fonction constructeur ?

2- À quoi sert le nouveau mot-clé `new`?

3 - À quoi le mot-clé `this` fait-il référence à l'intérieur d'une fonction constructeur?

4 - Qu'est-ce qu'une instance ?

5 - Créez une fonction constructeur pour créer une personne, chaque personne doit avoir un prénom, un nom, une couleur favorite et un numéro favori.

6 - Écrire une méthode appelée `sumFavoriteNumber` qui prend un nombre et renvoie la somme du nombre et du nombre préféré de la personne
