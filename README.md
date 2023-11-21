# Hangman (English)

- You can enjoy Hangman with random English word.

## Live Demo

- Play in [Here](https://hangman-es.vercel.app/)

## How To Set In Local

0. Check your Node.js version (>= 16.14)
1. `git clone https://github.com/chogyejin/hangman-en.git`
2. `cd hangman-en`
3. Set `.env` file in root directory with `API_URL` and `API_KEY`(See here [API Ninjas](https://api-ninjas.com/).)
4. `npm run dev` or `npm run build && npm run start -- -p [your port number]`

## Packages

- react: 18.2.0
- next: 13.0.5 ([Pages Router](https://nextjs.org/docs/pages))
- typescript: 4.9.3
- @emotion/react: 11.11.1
- @emotion/styled: 11.11.0
- axios: 1.6.2

## Directory

```
hangman-es
├─ pages
│  ├─ _app.tsx
│  ├─ api
│  │  └─ randomword.ts          # API Routes
│  ├─ 404.tsx                   # Not found page
│  ├─ game.tsx                  # game page
│  └─ index.tsx                 # main page
├─ src
│  ├─ components
│  │  ├─ Dropdown.tsx
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
│  │  ├─ useClickOutside.ts      # for Dropdown component
│  │  └─ useWord.ts
│  └─ lib
│     ├─ api
│     │  └─ getRandomword.ts     # mask URL & hide API key
│     ├─ axios
│     │  └─ index.ts
│     └─ utils
│        ├─ check.ts
│        ├─ draw.ts
│        └─ range.ts
└─ styles
   └─ globalStyles.ts
```

## Description

- Base
  - React function component(Typescript)
- Styles
  - Font: [Spoqa Han Sans Neo](https://spoqa.github.io/spoqa-han-sans/)
  - [reset CSS](https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0)(globalStyles in `_app.tsx`)
  - styled components by [emotion](https://emotion.sh/docs/introduction)
- Get random word

  - Free random API provided by [API Ninjas](https://api-ninjas.com/api/randomword)
  - By default API key is exposed in request headers(`x-api-key`), we can hide my own API key using Next.js's [API Routes](https://nextjs.org/docs/api-routes/introduction)

  - Proper nouns are so hard to guess, so check the response and re-request by axios instance`s intercepter.

- Custom hooks
  - `useWord` : fetch word and return `word`, `isLoading` and `refetch`
  - `useGuessing`: manage current `guessing word`, `result` and `reset` function.
  - `useClickOutside`: add `event listener` that has `handler` for click
- Canvas
  - In `HangmanCanvas` component, getting closer to the wrong count, draw hangman(refer to [here](https://codepen.io/xavier_bs/pen/MMNGyG))
  - When you reach the certain wrong count(8), game is over
- Not found page
  - custom `404.tsx`
  - If the query string is incorrect when the user accesses the game page by manipulating the url, the user moves to the 404 page(`NotFound` component) through `getServersideprops`.
