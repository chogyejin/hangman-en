# Hangman (ES)

- You can enjoy Hangman with random English word.

## Live Demo

- Play in [Here](https://hangman-es.vercel.app/)

## How To Set In Local

1. `git clone https://github.com/chogyejin/hangman-es.git`
2. `cd hangman-es`
3. `npm run dev` or `npm run build && npm run start -- -p [your port number]`

## Packages

- react: 18.2.0
- next: "13.0.5
- typescript: 4.9.3
- @emotion/react: 11.10.5
- @emotion/styled: 11.10.5
- axios: 1.2.0

## Directory

```
hangman-es
├─ pages
│  ├─ _app.tsx
│  ├─ api
│  │  └─ randomword.ts          # API Routes
│  ├─ game.tsx                  # game page
│  └─ index.tsx                 # entry page
├─ src
│  ├─ components
│  │  ├─ GameBoard.tsx
│  │  ├─ HangManCanvas.tsx
│  │  ├─ Keyboard.tsx
│  │  ├─ KeyboardList.tsx
│  │  ├─ Letter.tsx
│  │  ├─ Loading.tsx
│  │  └─ Retry.tsx
│  ├─ constants
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ useGuessing.ts
│  │  └─ useWord.ts
│  └─ lib
│     ├─ api
│     │  └─ randomword.ts
│     ├─ axios
│     │  └─ index.ts
│     └─ utils
│        ├─ check.ts
│        └─ draw.ts
└─ styles
   └─ globalStyles.ts
```

## Description

- Base
  - React function component
- Styles
  - Font: [Spoqa Han Sans Neo](https://spoqa.github.io/spoqa-han-sans/)
  - [reset CSS](https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0)(globalStyles in `_app.tsx`)
  - styled components by [emotion](https://emotion.sh/docs/introduction)
- Get random word
  - Free random API provied by [API Ninjas](https://api-ninjas.com/api/randomword)
  - By default API key is exposed in request URL, hide my own API key using Next.js`s [API Routes](https://nextjs.org/docs/api-routes/introduction)
  - Proper nouns are so hard to guess, so check it and re-request by axios instance`s intercepter.
- Custom hooks
  - `useWord` : fetch word and return `word`, `isLoading` and `refetch`
  - `useGuessing`: manage current `guessing word`, `result` and `reset` function.
- canvas
  - In `HangmanCanvas` component, according to wrong count, draw hangman(refer to [here](https://codepen.io/xavier_bs/pen/MMNGyG))
  - When you reach the certain wrong count(8), game is over
