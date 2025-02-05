# [Taelar.github.io](https://taelar.github.io/)

Bienvenue sur mon CV qui sert vaguement de portfolio. Je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi, je dois bien l'admettre.

## Todo

Code

- Ajouter un reset CSS ?
- Plugin eslint pour l'accessibilité
- Ajouter un lien vers le dépot github in app

Readme

- Ajouter un lien vers le design utilisé
- Lister et justifier les choix techniques

## Installation et utilisation

### Setup local

```sh
nvm use
npm install # Installe les dépendances du projet
npm run husky # Enregistre le pre-commit hook pour l'auto-lint à chaque commmit
npm start # Démarre le serveur local
```

L'application est disponible sur `http://localhost:5173`.

### Setup Docker

```sh
docker build -t taelar.io -f ./docker/Dockerfile.dev .
docker run --rm -it -p 5173:5173 -v .:/app taelar.io
```

Alternativement, si node est installé sur votre machine (sur une version compatible avec celle indiquée dans .nvmrc), vous pouvez setup le docker de développement via :

```sh
npm run docker:dev:build
npm run docker:dev:run
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
