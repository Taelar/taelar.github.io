# [Taelar.github.io](https://taelar.github.io/)

Bienvenue sur mon CV qui sert vaguement de portfolio. Je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi, je dois bien l'admettre.
Le design a été largement inspiré par [Clean CV Template](https://dribbble.com/shots/21132530-Clean-CV-Template).

## Todo

Code

- Ajouter un reset CSS ?
- Plugin eslint pour l'accessibilité
- Ajouter un lien vers le dépot github in app

Readme

- Lister et justifier les choix techniques

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
