# TD : Programmation orientée objet

### Exercice

1 - Ecrire les classes suivantes qui décris l'aborescence ci dessus : 

- `Employee` possède une propriété `fullname` et `email` dont la valeur par défaut est une chaine vide et `department` dont la valeur par défaut est `common`.

- `Manager` doit hériter de `Employee` avec une propriété employees dont la valeur par défaut est un tableau vide, ce sera un tableau rempli d’objets Employee.

- `Worker` doit hériter de `Employee` et possède une propriété `projects` et `skills` dont les valeurs par défaut sont des tableaux vides.

- `SalesPerson` doit hériter de `Employee` et possède une propriété `quota` dont la valeur par défaut est 100, la propriété branch est surchargée et vaut `sales`

   indiquant que tous les vendeurs font partie du même département

- `Developer` doit hériter de WorkerBee et la propriété `department` est surchargée avec la valeur `software engineering`.


2 - Ecrire un progamme ou on a un manager qui gere: 

   Trois commerciaux avec des compétences suivantes et qu travaille sur des projets:
      
   - Commercial 1 travaille sur le projet `Artificial Intelligence` et `Virtual Reality`: (Information Management, Persuasive Communication) 
   - Commercial 2 travaille sur le projet `Artificial Intelligence` et `Video Compensation`: (Research and Planning, Problem-Solving)
   - Commercial 3 travaille sur le projet `Satellite Wi-Fi`: (Research and Planning, Problem-Solving, Information Management, Persuasive Communication)
         
        
   Cinq développeurs avec les compétences suivantes :
   - Développeur 1 travaille sur le projet `Video Compensation` et `Artificial Intelligence`: (PHP, MYSQL, Symfony, JS, HTML, CSS)
   - Développeur 2 travaille sur le projet `Virtual Reality` et `Artificial Intelligence`: (Python, C, C++, MongoDB, JS, HTML, CSS)
   - Développeur 3 travaille sur le projet `Satellite Wi-Fi` et `Virtual Reality`: (JAVA, J2EE, Oracle)
   - Développeur 4 travaille sur le projet `Video Compensation` et `Artificial Intelligence`: (Android, Kotlin, JAVA)
   - Développeur 5 travaille sur le projet `Satellite Wi-Fi` et `Artificial Intelligence`: (Swift, Objective C, IOS)

3 - Le commercial 3 a gagné un nouveau projet `Mentorship Platform` et a besoin de developpeurs qui ont des compétences en JS, PHP et C.

4 - Les commerciaux ont obtenu des bonus suite à projets qu'ils ont obtenu pour la société, quel commercial a obtenu le plus gros bonus
   - `Video Compensation`
   - `Artificial Intelligence`
   - `Virtual Reality`
   - `Satellite Wi-Fi`
   - 

