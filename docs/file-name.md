[BACK TO README](../README.md)

## Fichier unique
- `index.ts` : barrel
- `element.tsx` : composant React
- `element.module.css` : CSS module (à utiliser uniquement pour des cas d'utilisation bien spécifique, généralement du placement difficile avec Tailwind)
- `element.story.{tsx,mdx}` : définitions Storybook pour un composant React
- `file.hook.ts` : hook React
- `file.type.ts` : types 
- `file.test.{ts,tsx}` : tests unitaires
- `file.e2e.{ts,tsx}` : tests end-to-end (uniquement dans le dossier `/test` à la racine du projet)
- `file.mock.ts` : mock pour les tests 
- `file.util.ts` : fichier utilitaire
- `file.store.ts` : store Zustand
- `file.config.ts` : configuration (peut aussi être utilisé pour les tests)
- `file.const.ts` : constants
- `file.parser.ts` : fichier contenant des types reflété par un validateur Zod
- `file.bin.ts` : bin executable via la console