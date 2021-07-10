## TP 7 -  Fonction

#### -  Exercice 1 : Est-ce que "else" est requis ?

La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie son résultat :

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```

La fonction fonctionnera-t-elle différemment si else est supprimé ?

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```
Existe-t-il une différence dans le comportement de ces deux variantes ?


#### -  Exercice 2 : Réécriver la fonction en utlisant ? (ternaire) ou || 

La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie le résultat.

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```
Réécrivez-le, pour effectuer la même chose, mais sans if, et en une seule ligne.

Faites deux variantes de checkAge :

1. En utilisant un opérateur point d’interrogation ?
2. En utilisant OU ||


#### -  Exercice 3 :  Réécrire avec les fonctions fléchées

Remplacez la fonction ask par une fonction fléchée dans le code ci-dessous :

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

#### -  Exercice 4 : Rest operators

Remplacer cette fonction par une fonction qui utilise le rest operator (...)

```javascript
function multiply() {  
  let result = 1;
  let nombres = Array.from(arguments);
   
  nombres.forEach( (number) => {
    result *= number;
  })
  
  return result;
}
console.log(multiply(1, 2, 3, 4, 5));
```


#### -  Exercice 5

Que vont afficher ces extraits de code ?

##### Extrait 1

```javascript
function show() {
  console.log('Welcome!');
}
show();
```

##### Extrait 2
```javascript
function show() {
  console.log('Welcome!');
}
show();
show();
```


##### Extrait 3
```javascript
function show() {
  let localVar = "Welcome!";
  console.log(localVar);
}
show();
console.log(localVar);
```
##### Extrait 4
```javascript
let siteName = 'Techmind';
function show() {
  let variable = 'Welcome to ' + siteName;
  console.log(variable);
}
show();
``` 
##### Extrait 5
```javascript
let siteName = 'newSite';
function show() {
  let siteName = "Techmind";
  let message = 'Welcome to ' + siteName; 
  console.log(message); 
}
show();
console.log(siteName);
````

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
alert( isEmpty(person) ); // false
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
