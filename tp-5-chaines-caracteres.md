## TP 5 -  Les chaines de caractères

### A faire sur un environnement en ligne JS (jsbin ou codepen)

#### -  Exercice 1

Completer la fonction afin de savoir si la chaine est vide. Cette fonction doit retourner un booléen.

```javascript

function isBlank(string) {
   
}

console.log(isBlank('')) // doit retourner true
console.log(isBlank('hello world')) // doit retourner false

```

#### -  Exercice 2

Ecrire une fonction qui transforme une chaine de caractère en abbreviation. 
La fonction doit retourner false lorsqu'un seul mot figure dans la chaine.


```javascript
fonction getAbbreviation(string) {

}

console.log(getAbbreviation('Tom Hanks')) // TH
console.log(getAbbreviation('Tom')) // false

```
#### -  Exercice 3

Ecrire une fonction qui cache une partie de l'email

```javascript
function hideEmail(email) {
  
}

console.log(hideEmail('john.doe@gmail.com'));  // john...@gmail.com
console.log(hideEmail('john')); // false
``` 

#### -  Exercice 4

Ecrire une fonction qui insere une chaine de caractère dans une position particulière

```javascript

function insert(string) {

}

console.log(insert('Nous faisons des exercices.')); // "Nous faisons des exercices"
console.log(insert('Nous faisons des exercices.','JavaScript ')); // "JavaScript Nous faisons des exercices"
console.log(insert('Nous faisons des exercices.','JavaScript ',17)); // "Nous faisons des JavaScript exercices"
```

#### -  Exercice 5

Ecrire une fonction qui supprime les balises HTML dans une chaine de caractères

```javascript

function removeTagsHtml() {

}

console.log(removeTagsHtml('<p><strong>Hello</strong> world</p>')); // Hello world!

```
