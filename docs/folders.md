[BACK TO README](../README.md)

## Organisation des dossiers
- **public/** - assets (png, font, etc)
- **test/** tests end-to-end
- **src/**
  - **app/** - routing de [NextJS](https://beta.nextjs.org/docs/routing/fundamentals)
  - **lib/** 
    - **components/** - composants React, organisé avec l'[Atomic Design](#atomic-design)
      - **atoms/**
      - **molecules/**
      - **providers/**
      - **layouts/**
    - **hooks/** - hooks React
    - **api/** - support de l'API généré automatiquement
    - **styles/** - les styles principaux
    - **utils/** - fichiers utilitaires
    - **configs/** - configurations
    - **stores/** - stores Zustand
- **.storybook/** - configuration Storybook

## Atomic Design
Les composants sont organisés en suivant la méthodologie "Atomic Design", cette méthodologie sépare les composants de notre site en 5 parties :

### Atomes
Ce sont les éléments de base qui composent notre design système, tels que les boutons, les texts, les champs de formulaire, etc. 

Ils sont stocké dans le dossier `src/lib/components/atoms/`.

### Molécules 
Ce sont généralement des groupes d'atomes qui fonctionnent ensemble pour remplir une fonction particulière (tels qu'un champ de recherche avec un bouton de recherche) ou encore des composants plus complexe qui ne rentre pas dans la catégorie des composants atomiques. 

Ils sont stocké dans le dossier `src/lib/components/molecules/`.

### Layouts
Ce sont des composants qui vont englober et structurer le contenu d'une page, par exemple une navbar, une sidebar, un app-shell, un panel, etc

Ils sont stocké dans le dossier `src/lib/components/layouts/`.

### Sections
Une page est divisé en plusieurs sections (par exemple : header, about, our team...) qui contiennent eux même des atomes et des molécules.

Ils sont stocké dans le dossier d'une page ([voir routing de NextJS](https://beta.nextjs.org/docs/routing/fundamentals)).

### Pages
Les pages contiennent un ensemble de section ou alors directement des molécules et des atoms pour les plus petites pages. Une page est généralement englobée dans un layout.

Ils sont stocké dans le dossier d'une page ([voir routing de NextJS](https://beta.nextjs.org/docs/routing/fundamentals)).