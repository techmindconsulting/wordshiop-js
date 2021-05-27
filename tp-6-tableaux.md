## TP 5 -  Les tableaux

### A faire sur un environnement en ligne JS (jsbin ou codepen)

#### -  Exercice 1
Ecrire une fonction qui clone un tableau

```javascript 
function cloneArray() {
  
}

console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));
```

#### -  Exercice 2

Ecrire une fonction multiplyEvenIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index impair doit être renvoyé tel quel
* Chaque nombre situé à un index pair doit être renvoyé multiplié par son index

```

function multiplyOddIndices(numbers) {
}
const myArray = [4, 8, 11, 14, 19, 6];
console.log(multiplyOddIndices(myArray)); // [0, 8, 22, 14, 76, 6]
``` 

#### -  Exercice 3

Ecrire une fonction getStringsLength qui reçoit comme un argument un tableau de chaînes.

Cette fonction doit renvoyer un tableau avec pour chaque chaîne CHAINE de longueur N en entrée, la chaîne "CHAINE contient N caractères"
en sortie.

```javascript
function getStringsLength() {

}
const myArray = [ 'Poulet', 'Bacon', 'Tofu', 'Mayonnaise'];
console.log(getStringsLength(myArray));

/* [
  'Chicken contient 7 caractères',
  'Bacon contient 5 caractères',
  'Tofu contient 4 caractères',
  'Mayonnaise contient 10 caractères'
]; */
```


#### -  Exercice 4
Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres et 
renvoie un tableau ne contenant que des nombres positifs ou nuls.

```javascript
function getPositivesNumbers() {

}
const myArray = [7, -4, 2, 0, -10, 3, 11];

console.log(getPositiveNumbers(myArray)); //   [7, 2, 0, 3, 11]

``` 

#### -  Exercice 5
Ecrire une fonction getCandidateJS qui renvoie les noms des candidats et les téléphones avec des compétences en JS. 

Cette fonction reçoit en argument un tableau d'objets décrivant des candidats avec des compétences techniques. 

Chaque candidats a ces propriétés:
- fullname: nom et prenom
- skils: les compétences que possèdent le candidat


```javascript
const candidates =  [
  { fullname: 'Miguel Henry', phone: '+33611457845', skills: ['PHP', 'JS'] },
  { fullname: 'Marley Mcguire', phone: '+33611457846',  skills: ['JS'] },
  { fullname: 'Azul Webb', phone: '+33611457847', skills: ['PHP', 'JS'] },
  { fullname: 'Angelo Avila', phone: '+33611457848', skills: ['JS'] },
  { fullname: 'Shania Bullock', phone: '+33611457849', skills: ['PHP'] },
  { fullname: 'Larissa Payne', phone: '+33611457840', skills: ['JS'] },
  { fullname: 'Andres Delgado', phone: '+33611457841', skills: ['JEE', 'JS'] }
];
```

#### -  Exercice 6
Ecrire une fonction qui calcule la somme de tous les nombres en utilisant le methode reduce()

```javascript
function total(array) {
   
}
console.log(total([1,2,3])); // 6
``` 

#### -  Exercice 7
Ecrire une fonction qui concatene les nombres en une chaine de caracteres en utilisant reduce

```jaavscript
function stringConcat(arr) {
   // your code here 
}

console.log(stringConcat([1,2,3])); // "123"
``` 

#### -  Exercice 8
Completez le programme afin d'afficher le nombre de votant

```javascript
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

document.write(`Le nombre de votant est de ${nbVotant}`);
```

#### -  Exercice 9
Completez le programme afin d'afficher la moyenne d'age

```javascript
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

document.write(`La moyenne d'age est de ${averageAge}`);
```
#### -  Exercice 10

Mettre un tableau a plat dans un seul tableau à l'aide d'une fonction

```javascript
function flatten(arr) {
   
}

const myArrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
``` 
