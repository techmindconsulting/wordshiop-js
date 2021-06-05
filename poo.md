# TD : Programmation orientée objet

### Exercice

1 - Ecrire les classes suivantes qui décris l'aborescence ci dessus : 

- `Employee` possède une propriété `fullname` dont la valeur par défaut est une chaine vide et `department` dont la valeur par défaut est `common`.

- `Manager` doit hériter de `Employee` avec une propriété employees dont la valeur par défaut est un tableau vide, ce sera un tableau rempli d’objets Employee.

- `Worker` doit hériter de `Employee` et possède une propriété `projects` et `skills` dont les valeurs par défaut sont des tableaux vides.

- `SalesPerson` doit hériter de `Employee` et possède une propriété `quota` dont la valeur par défaut est 100, la propriété branch est surchargée et vaut `sales`

   indiquant que tous les vendeurs vont partie du même département

- `Engineer` doit hériter de WorkerBee et la propriété `department` est surchargée avec la valeur `engineering`.


2 - Ecrire un programme ou on a un manager qui gere 3 commerciaux  avec des compétencs suivantes : 


et l'autre 2 employées
