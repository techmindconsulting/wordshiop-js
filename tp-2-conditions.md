## TP-2 Les conditions

### A faire sur un environnement en ligne JS (https://jsbin.com/)

 #### -    Exercice 1

Completez ce programme javascript qui accepte deux nombres et affiche le plus grand dans la console (console.log)

```
var num1, num2;
num1 = window.prompt("Merci de saisir le premier nombre", "0");
num2 = window.prompt("Merci de saisir le second nombre", "0");
....
``` 
Remarque : La méthode Window.prompt() affiche une boîte de dialogue, éventuellement avec un message, qui invite l'utilisateur à saisir un texte ou .
Documentation: https://developer.mozilla.org/fr/docs/Web/API/Window/prompt


#### -    Exercice 2

Completer cette fonction qui affiche 'Bonjour tous le monde' dans les trois langues suivantes (français, anglais, espagnol)
```
function helloWorld(lang) {
 if (lang == 'fr') {
        return 'Bonjour tout le monde';
    }
    .....
 }
```

La fonction devra être appelés avec les trois langues
```
console.log(helloWorld('en')); // Doit afficher Hola Munda
console.log(helloWorld('fr')); // Bonjour tous le monde
console.log(helloWorld('es')); // Hola, Munda
``` 

Remarque: Une fonction est un sous programme qui effectue une tache. Afin d'utiliser la fonction il est nécéssaire de l'appeler
Documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions


#### -    Exercice 3
Completer cette fonction nommée attribuerNote qui prend en argument la note et doit
renvoyer une lettre pour le score, soit «A», «B», «C», «D» ou «F».
Si le score > 90 alors retourner A
Si le score > 80 alors retourner B
Si le score > 70 alors retourner C
Si le score > 65 alors retourner D
Sinon retouner F

```
function attribuerNote(note) {
   .....
}
````

Les fonctions devront être appelés de cette manière
````
console.log('Tu as eu un' + attribuerNote(95)); // Tu as eu un A
console.log('Tu as eu un ' + attribuerNote(65)); // Tu as eu un F
`````

#### - Exercice 4 

Comepletez ce programme qui affiche un nombre en littéral lorsque un nombre digital est saisi

- un, si est égal à 1
- deux, si est égal à 2
- trois, si est égal à 3
- quatre, si est égal à 4
- cinq, si est égal à 5
- six, si est égal à 6
- sept, si est égal à 7
- huit, si est égal à 8
- neuf, si est égal à 9
- Je ne connais pas ce nombre si aucun des nombres entre 1 et 9 est saisi

```
var number;
number = window.prompt("Merci de saisir un nombre");
....
``` 

#### Exercice 5
Déclarez trois variables a, b et c comme "1", "2" et a+b. 
Afficher le type et la valeur de chaque variable. 

Si la variable c est de type string alors afficher "une concaténation a été effectué" et si la variable est type number alors afficher "une addition a été effectuée"

