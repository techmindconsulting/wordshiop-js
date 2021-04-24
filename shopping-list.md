# TD : Course du supermarché

Afficher les noms des produits et leurs prix, puis faire le total des prix et l'afficher à la fin de la liste. Dans l'exemple modifiable ci‑dessous, il y a des commentaires numérotés — chacun d'entre eux marque l'emplacement où vous devez ajouter du code.

### html
    <body>
	    <div class="output">
		    <ul></ul>
		    <p></p>
        </div>
    </body>


### javascript
    const list = document.querySelector('.output ul');
    const totalBox = document.querySelector('.output p');
    let total = 0;
    list.innerHTML = '';
    totalBox.textContent = '';
    
    // etape 1
                'Caleçons:6.99'
                'Chaussettes:5.99'
                'T-shirt:14.99'
                'Pantalons:31.99'
                'Chaussures:23.99';
    
    for (var i = 0; i <= 0; i++) { // etape 2
	    // etape 3
	    
	    // etape 4
	    
	    // etape 5
	    itemText = 0;
	    let listItem = document.createElement('li');
	    listItem.textContent = itemText;
	    list.appendChild(listItem);
    }


## Etape 1

Sous le commentaire  `// etape 1`  il y a un certain nombre de chaînes de caractères, chacune précise le nom d'un produit et son prix séparé par deux‑points. 
Placez‑les dans un tableau ; enregistrez‑le sous le nom  `products`.

## Etape 2

Sur la même ligne que le commentaire  `// etape 2`  se trouve le début d'une boucle. Dans cette ligne nous avons actuellement  `i <= 0`, test conditionnel qui fait que la boucle  stoppe immédiatement, car ce test dit « stopper dès que  `i`  est inférieur ou égal à 0 » et  `i`  part de 0. Remplacez ce test par un qui n'arrêtera pas la boucle tant que  `i`  sera inférieur à la taille du tableau  `products`.

## Etape 3

Au dessous du commentaire  `// etape 3`  nous voudrions que vous écriviez une ligne de code qui scinde l'élément courant du tableau (`nom:prix`) en deux éléments distincts, un contenant uniquement le nom, l'autre uniquement le prix. 

## Etape 4

En plus des lignes de code ci‑dessus, vous aurez aussi à convertir les prix de chaîne de caractères en chiffres. Si vous ne vous souvenez pas comment faire, revoyez

## Etape 5

Il y a une variable nommée  `total`  créée et initialisée à la valeur de 0 en tête du code. Dans la boucle (sous  `// number 4`) ajoutez une ligne qui ajoute à ce total le prix de l'article courant à chaque itération de la boucle, de sorte que à la fin du code le prix total soit correctement inscrit sur l'envoi. 

## Etape 6

Nous souhaitons que vous modifiez la ligne au‑dessous de `// number 5`  de sorte que la variable  `itemText`  soit égale à « nom actuel de l'élément — $prix actuel de l'élément », par exemple « Shoes — $23.99 » dans chaque cas, de façon à ce qu'une information correcte soit affichée sur l'envoi. Il s'agit d'une simple concaténation de chaînes de caractères, chose qui doit vous être familière.
