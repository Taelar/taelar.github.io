# [Taelar.github.io](https://taelar.github.io/)

Bienvenue sur mon CV qui sert vaguement de portfolio. Je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi, je dois bien l'admettre.

## Todo

Code

- Double check l'accessibilité
- Watermark "Générée via ..." à l'impression

## Installation et utilisation

### Setup local

Il est possible de lancer l'application localement, si [NVM](https://github.com/nvm-sh/nvm) est installé sur votre machine :

```sh
nvm use
npm install # Installe les dépendances du projet
npm run husky # Enregistre le pre-commit hook pour l'auto-lint à chaque commmit
npm start # Démarre le serveur local
```

L'application est disponible sur `http://localhost:5173`.

### Setup Docker

L'application peut aussi être utilisée via Docker (et Docker Compose). Il est possible d'ajouter le flag `--build` pour forcer la recompilation de l'image.

```sh
docker compose up
```

## Techno utilisées

On justifie ici pourquoi certaines technos ont été choisies pour ce projet

### React

Je me suis demandé si l'utilisation d'une technologie comme React était vraiment justifiée étant donné le peu de besoin fonctionnel du projet, et s'il n'était pas plus adapté de directement écrire du HTML statique. Néanmoins je ne voulais me fermer aucune porte, pour ne pas bloquer d'éventuelles envies et des idées de fonctionnalités nécessitant un peu de logique client avancée. Le fait de fonctionner en composants, même pour un petit projet, a aussi l'avantage de garantir une cohérence forte dans le design sans avoir vraiment à y penser.

### React Router Framework mode (React + Vite + RR)

Je cherchais pour ce projet une techno orientée génération d'HTML statique (SSG), car je savais qu'au bout du compte je n'aurais que peu (voire pas) de contenu dynamique. React Router Framework, héritier de Remix, est totalement dans cette optique de privilégier la génération de contenu statique au build time, en plus d'encourager l'utilisation d'HTML standard et cohérent. C'était également l'occasion d'essayer cette approche car je n'ai pas eu l'occasion de mettre RRF à l'épreuve avant ce projet.

React Router a tout de même le défaut d'être connu pour ses versions majeures contenant de gros breaking changes, pouvant mener à des refactorisations complexes à chaque montée de version. Mais ce projet n'ayant pas vocation à avoir plus de deux ou trois pages, il ne devrait pas être difficile de faire face à des breaking changes.

Il présente aussi l'avantage de fonctionner via Vite, bundler réputé qui a prouvé son efficacité tout en étant facile à configurer. On peut également être confiant sur le fait que Vite restera présent dans l'écosystème JS dans les prochaines années, nous évitant d'avoir à migrer.

Un dernier avantage est que RRF est assez malléable, au sens où on peut s'en servir pour écrire une SPA, un site statique ou une application plus complexe utilisant du SSR, permettant de ne bloquer aucune évolution future.

### Typescript

A-t-on vraiment besoin de justifier l'utilisation de Typescript aujourd'hui ? Utiliser du javascript pur pour un projet qui va devoir survivre à l'épreuve du temps est un risque considérable. L'analyse de type de Typescript permet de garder un haut niveau de confiance dans la cohérence du code que l'on écrit, même si les phases de développement sont espacées dans le temps.

### CSS/Sass

J'apprécie personnellement les fonctionnalités de Sass, d'une part pour ses utilitaires et d'autres part pour sa déclaration de variables compilées. On pourrait dire que les variables CSS accomplissent aujourd'hui la mission des variables Sass mais je ne suis pas tout à fait d'accord. Leur principal défaut est de ne faire l'objet d'aucune analyse statique, les rendant sensibles aux erreurs de frappes. Un défaut que n'a pas Sass de par le fait qu'il est transpilé au build time.

Un avantage également de Sass est le fait que, bien qu'il soit une surcouche au CSS, nous maintient dans la démarche originelle du CSS, centrée sur l'écriture de classe dans la syntaxe de base qui est enrichie pas altérée. Cela permet de pouvoir utiliser l'intégralité de ses connaissances CSS sans avoir à réapprendre le fonctionnement d'un framework CSS comme Tailwind par exemple.

### Modules CSS

Les CSS modules ont pour vocation première d'isoler le style de chaque composant, évitant les conflits de nommages. C'est une missions qu'ils accomplissent parfaitement pour un temps de mise en place et d'utilisation minime.

### Github pages

N'ayant pas besoin de fonctionnalité serveur, que ce soit de SSR ou de point d'API, je n'avais pas l'usage d'un host plus compliqué. Github pages brille par sa simplicité et sa fiabilité, le repo Git étant déjà sur Github, le choix paraissait naturel.

### Prettier / ESLint / Husky

Une chaîne d'outils très courantes pour garantir de bonnes pratiques de développement, que ce soit pour le formatage du code avec prettier ou l'analyse du code avec Eslint. Husky vient ici compléter la chaîne, pour augmenter la confiance dans le fait que le code commité sur le repository est conforme à la configuration Prettier.

## Ressources notables

Le design a été largement inspiré par [Clean CV Template](https://dribbble.com/shots/21132530-Clean-CV-Template).

[CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) par Josh Comeau.

[Water Ripples Effect](https://www.youtube.com/watch?v=DncmUVn1Yfg) par Codegrid.
