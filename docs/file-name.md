[BACK TO README](../README.md)

## Fichier unique
- `index.ts` : barrel
- `element.tsx` : composant React
- `element.module.css` : CSS module (to be used only on a specific case, such as having difficult to implement this with TailwindCSS)
- `element.story.{tsx,mdx}` : This is where the component for StoryBook is define
- `file.hook.ts` : hook React
- `file.type.ts` : types 
- `file.test.{ts,tsx}` : Unit Test
- `file.e2e.{ts,tsx}` : tests end-to-end (use it only at the root folder of the `/test` folder)
- `file.mock.ts` : mockup for the unit test
- `file.util.ts` : Utility files
- `file.store.ts` : Store Zustand
- `file.config.ts` : Configuration (can also be used for tests)
- `file.const.ts` : Constants
- `file.parser.ts` : File containing the types for Zod
- `file.bin.ts` : bin executable from CLI