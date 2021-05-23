# TD : Remettre les majuscules

Dans cet exercice, nous avons des noms des villes Françaises, mais les majuscules ne sont pas au bon endroit. Nous souhaitons modifier les noms pour qu'ils soient en minuscules à l'exception de la première lettre qui doit être une majuscule.
### html
    <body>
	    <div class="output">
		    <ul>
		    </ul>
		</div>
	</body>


### javascript

```
const list = document.querySelector('.output ul');
list.innerHTML = '';
const cities = ['pAriS', 'MarsEILle', 'borDEAUX', 'lYON'];
for (let i = 0; i < cities.length; i++) {
    let input = cities[i];
    // Etape 1
    // Etape 2
    // Etape 3
    // Etape 4
    let result = input;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}
```
## Etape 1

Convertissez la totalité de la chaîne contenue dans la variable  `input`  en minuscules et stockez-la dans une nouvelle variable.

## Etape 2

Récupérez la première lettre de la chaîne dans cette nouvelle variable et stockez-la dans une autre variable.

## Etape 3

En utilisant la dernière variable comme une sous-chaîne, remplacez la première lettre de la chaîne en minuscules par la première lettre de la chaîne en minuscules transformé en majuscules. Stockez le résultat de cette procédure de remplacement dans une autre nouvelle variable.

### Etape 4
Changez la valeur de la variable `result` afin qu'elle soit égale au résultat final plutôt qu'à `input`
