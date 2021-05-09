# TD : Filtrer les unes d'un journal sportif

Nous avons des unes d'un journal sportif, mais nous voulons les trier pour ne lister que les une concernant l'équipe de Lyon. Nous attendons de vous que vous utilisiez un test conditionnel à l'intérieur d'une structure `if( ... )`, pour tester chaque chaîne et ne l'afficher dans la liste que si elle contient Lyon.

### html
    <body>
	    <div class="output">
		    <ul>
		    </ul>
		</div>
	</body>


### javascript

    var list = document.querySelector('.output ul');
    list.innerHTML = '';
    var greetings = ['On a retrouvé Marseille à la seconde période!',
                 'Lyon les mal aimés',
                 'Lyon a changé de visage à la pause',
                 'Le maintien défi ultime pour Lens',
                 '3 forfait ce soir pour Paris'];
    for (var i = 0; i < greetings.length; i++) {
	    var input = greetings[i];
	    // Votre test conditionnel doit être dans les parenthèses
	    // dans la ligne ci-dessous, en remplaçant celle présente.
	    if (greetings[i]) {
		    var result = input;
		    var listItem = document.createElement('li');
		    listItem.textContent = result;
		    list.appendChild(listItem);
		  }
	}



## Etape 1

Réfléchissez d'abord à comment vérifier que le message concerne Lyon. Quelle chaîne est présente dans tous ces unes, et quelle méthode pourriez-vous utiliser pour en tester la présence ?
