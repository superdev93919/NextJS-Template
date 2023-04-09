[BACK TO README](../README.md)

## Gestion des dépendances
- `pnpm install` : installation des dépendances 
- `pnpm outdated` : voir les dépendances qui ne sont pas à jour
- `pnpm update -L <packageName>` : mise à jour des dépendances vers leur dernière version

## Développement
- `pnpm run dev` : lancement du site en mode développement
- `pnpm run sb:dev` : lance l'interface de visualisation/développement du design système

## Production
> Utile uniquement pour debug en cas d'erreur de l'action GitHub qui test le build. Sinon la mise en production est gérer automatiquement.
- `pnpm run build` : build du site
- `pnpm run start` : lance le build du site
- `pnpm run sb:build` : build de Storybook
- `pnpm run sb:start` : lance le build de Storybook

## Code check et tests
> Généralement utile avant un `git push` pour detecter les potentiels problèmes.
- `pnpm run lint:fix` : formatting et linting du code
- `pnpm run test:unit` : lance les tests unitaires