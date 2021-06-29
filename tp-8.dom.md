## TP-8 DOM

### A faire sur un environnement en ligne JS

 #### -    Exercice 1

Voici un extrait html avec un bouton. Lors du click sur le bouton, une modification du style du texte du paragraphe doit être effectuées. 
La famille de police, la taille de la police et la couleur du texte du paragraphe seront donc modifiées.

```html
<body>
    <p id="text">Ceci est un exercice</p>
    <div>
        <button id="btn">Afficher</button>
    </div>
</body>
``` 

#### -    Exercice 2
Ecrire un code qui permet d'obtenir le nom et prénom du formulaire lors de la soumission du formulaire.

```html
<body>
    <form id="form1">
        First name: <input type="text" name="firstname" value="John">
        Last name: <input type="text" name="lastname" value="Doe">
        <input type="submit" value="Submit">
    </form>
</body>
```

#### - Exercice 3

Écrire un programme qui permet de définir la couleur d'arrière-plan d'un paragraphe

#### - Exercice 4

Écrire une fonction qui permet d'obtenir la valeur des attributs href, hreflang, rel, target et type du lien spécifié au click du bouton.

```html
<body>
    <p>
        <a
            id="w3r"
            type="text/html"
            hreflang="en-us"
            rel="nofollow"
            target="_self"
            href="https://www.w3resource.com/"
            >w3resource</a
        >
    </p>
    <button>
        Click here to get attributes value
    </button>
</body>
``` 

#### - Exercice 5

Ecrire un programme qui permet d'insérer une ligne dans le tableau.

```html
<body>
    <table id="sampleTable" border="1">
        <tr>
            <td>Row1 cell1</td>
            <td>Row1 cell2</td>
        </tr>
        <tr>
            <td>Row2 cell1</td>
            <td>Row2 cell2</td>
        </tr>
    </table>
    <br>
    <input type="button" value="Insert row" />
</body>
````
