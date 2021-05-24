# TD : Filtrer les unes d'un journal sportif

Nous avons des unes d'un journal sportif, mais nous voulons les trier pour ne lister que les une concernant l'équipe de Lyon. Nous attendons de vous que vous utilisiez un test conditionnel à l'intérieur d'une structure `if( ... )`, pour tester chaque chaîne et ne l'afficher dans la liste que si elle contient Lyon.

### html
```html
<div class="output">
  <ul>
  </ul>
</div>
```

### javascript

```javascript
const list = document.querySelector(".output ul");
const titles = [
  "On a retrouvé Marseille à la seconde période!",
  "Lyon les mal aimés",
  "Lyon a changé de visage à la pause",
  "Le maintien défi ultime pour Lens",
  "3 forfaits ce soir pour Paris"
];
for (var i = 0; i < titles.length; i++) {
  var input = titles[i];
  // Votre test conditionnel doit être dans les parenthèses
  // dans la ligne ci-dessous, en remplaçant celle présente.
  if (titles[i]) {
    let result = input;
    let listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
```

## Etape 1

Réfléchissez d'abord à comment vérifier que le message concerne Lyon.

## Etape 2

Quelle chaîne est présente dans tous ces unes. 

## Etape 3

Quelle méthode pourriez-vous utiliser pour en tester la présence ?
