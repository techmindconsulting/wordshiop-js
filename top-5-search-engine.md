# TD : TOP 5 Recherche

Quand un terme est entré dans la boîte de recherche, les 5 précédents termes entrés sont affichés dans la liste. Quand le nombre de termes dépasse 5, le dernier terme est supprimé chaque fois qu'un nouveau terme est ajouté ; ainsi, le 5 termes précédents sont toujours affichés.

### html
    <body>
	    <div class="output">
	        <input type="text" name="search" id="search">
	        <button type="button">Rechercher</button>
		    <ul>
		    </ul>
		</div>
	</body>


### javascript

    const list = document.querySelector('.output ul');
    const searchInput = document.querySelector('.output input');
    const searchBtn = document.querySelector('.output button');
	
	list.innerHTML = '';
	const myHistory = [];

	searchBtn.addEventListener('click', () => {
	// nous n'autoriserons la saisie d'un terme que si l'entrée de recherche n'est pas vide
		if (searchInput.value !== '') {
			// etape 1
			
			// vider la liste pour ne pas afficher les entrées en double
		    // l'affichage est régénéré chaque fois qu'un terme de recherche est entré.
		    
		    list.innerHTML = '';

			// parcourez le tableau et affichez tous les termes de recherche dans la liste
		     myHistory.forEach( term => {
		        let listItem = document.createElement('li');
		        listItem.textContent = term;
		        list.appendChild(listItem);
		     });
		     
		    // Si la longueur du tableau est égale ou supérieure à 5, 
		    // supprimez le terme de recherche le plus ancien
		    if (myHistory.length >= 5) {
		      // etape 2 
		    }

		    // videz l'entrée de recherche et concentrez-la, prêt pour le prochain terme à saisir
		    searchInput.value = '';
		    searchInput.focus();
	    }
    });


## Etape 1

Ajouter une ligne sous le commentaire  `// etape1`  pour ajouter la valeur qui vient d'être saisie dans la boîte au début du tableau. Cette valeur est récupérée avec  `searchInput.value`.

## Etape 2

Ajouter une ligne sous le commentaire  `// number 2` pour supprimer la valeur en fin de liste du tableau.
