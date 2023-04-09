[BACK TO README](../README-en.md)

## TypeScript
- [Documentation](https://www.typescriptlang.org/)
- [Tutoriel](https://grafikart.fr/formations/typescript)

## React
- [Documentation](https://beta.reactjs.org/)

## NextJS
Mainly used for the renders (SSR, CSR) and the routing.
- [Documentation](https://beta.nextjs.org/docs)

## Tailwind
Tailwind allow the creation of the design system using the `tailwind.config.js` using their styling class generated automatically.
- [Documentation](https://tailwindcss.com/)

The template use of the CLSX which is generally used to conditionally apply a given className. This syntax means that some class will only be applied if a given condition evaluates to true [CLSX](https://www.npmjs.com/package/clsx).  

Usage of the CLSX, mean that using Tailwind in a variable (not the className attribut) need to end with Styles (example: `buttonStyles`) or the name of the variable is `styles`, this will bring auto-completion in your IDE.

## Zod
Zod is use for the validation data (form, external request, etc...).
- [Documentation](https://zod.dev/)

## Zustand
Zustand allow to handle the globals states.
- [Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

## React Query
React Query is use for the caching and states of the API request.
- [Documentation](https://tanstack.com/query/latest/)
- [Video introduction](https://youtu.be/novnyCaa7To)

## React Hook Form
React Hook Form is used for the form and bringing validation within the form.
- [Documentation](https://react-hook-form.com/)
- [Docs/Validation](https://react-hook-form.com/get-started#SchemaValidation) (avec [Zod](#zod))

## React Icons
React Icons and the collection "Feather" is what is used in this template.
- [Collection](https://react-icons.github.io/react-icons/icons?name=fi)

## Vitest & Testing Library
Vitest allow to handle / run unit test. Testing Library is a library that provides utilities for testing UI components in this template for React.
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/)

## Playwright
Playwright is used for end-to-end test.
- [Documentation](https://playwright.dev/docs/intro)

## Storybook
Storybook is used for visualisation, development and test of the design system.
- [Documentation](https://storybook.js.org/docs/7.0/react/writing-stories/introduction)