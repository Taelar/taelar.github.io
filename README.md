# [Taelar.github.io](https://taelar.github.io/)

Bienvenue sur mon CV qui sert vaguement de portfolio. Je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi, je dois bien l'admettre.

## Todo

Code

- Responsive, notamment mobile
- Trouver une alternative au 'width: 794px;' pour mimiquer le format A4

Readme

- Justifier les choix techniques

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

### Notables

- Vite
- React
- React Router Framework mode
- Sass
- Modules CSS

### Secondaires

- Prettier
- Husky
- Eslint

### Pourquoi ne pas utiliser X techno ?

- Next
- Tailwind

## Ressources notables

Le design a été largement inspiré par [Clean CV Template](https://dribbble.com/shots/21132530-Clean-CV-Template).

[CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) par Josh Comeau.
