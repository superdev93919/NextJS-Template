[BACK TO README](../README.md)

## TypeScript
- [Documentation](https://www.typescriptlang.org/)
- [Tutoriel](https://grafikart.fr/formations/typescript)

## React
- [Documentation](https://beta.reactjs.org/)

## NextJS
Principalement utilisé pour la gestion de différents rendu (SSR, CSR) et le routing.
- [Documentation](https://beta.nextjs.org/docs)

## Tailwind
Permet de définir le thème du design système à travers la configuration `tailwind.config.js` et les classes de style automatiquement générés.
- [Documentation](https://tailwindcss.com/)

Pour les styles conditionnels avec Tailwind, nous utilisons le package [CLSX](https://www.npmjs.com/package/clsx).  

Toute utilisation de Tailwind dans une variable (pas directement dans l'attribut `className`), il faut que le nom de la variable se termine par `Styles` (exemple: `buttonStyles`) ou que le nom de la variable soit `styles`, cela permet d'avoir de l'auto complétion.

## Zod
Validation des données (formulaires, requêtes externe, etc).
- [Documentation](https://zod.dev/)

## Zustand
Permet de gérer les states globals. 
- [Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

## React Query
Gestion du cache et des states pour les requêtes vers notre API.
- [Documentation](https://tanstack.com/query/latest/)
- [Vidéo d'introduction](https://www.youtube.com/watch?v=3jlBocCieVU)

## React Hook Form
Gestion des formulaires avec validation.
- [Documentation](https://react-hook-form.com/)
- [Docs/Validation](https://react-hook-form.com/get-started#SchemaValidation) (avec [Zod](#zod))

## React Icons
Pour les icons, nous utilisons le package `react-icons` avec la collection "Feather".
- [Collection](https://react-icons.github.io/react-icons/icons?name=fi)

## Vitest & Testing Library
Vitest permet de gérer / run les tests unitaires et Testing Library apporte des fonctions utilitaires pour tester React.
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/)

## Playwright
Gestion et écriture des tests end-to-end.
- [Documentation](https://playwright.dev/docs/intro)

## Storybook
Visualisation, développement et test du design système.
- [Documentation](https://storybook.js.org/docs/7.0/react/writing-stories/introduction)