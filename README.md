![LoL Profile gif](https://github.com/Krycha94/lol-profile/blob/main/public/lol-profile-gif.gif?raw=true)

# LoL Profile

[SEE THIS PROJECT LIVE](https://lolprofile-krycha.netlify.app/)

## Project Overview

LoL Profile is API project from my favourite game which fetches and displays the large data, using the [RIOT API](https://developer.riotgames.com/).

I created this website with ReactJS, Typescript and SASS. I used React Router for SPA and axios to fetch data. The application is also tested with Vitest and React Testing Library.

If you dont play League of Legends you can type random name to check result, example: "Denited".

You can:

- Enter username and region to find player profile and statistics such as avatar and level.
- See detailed player match history.
- Check top #200 players on each server.
- Find out which champions are currently in free rotation.

## Technologies

In this project I used:

- [Vite](https://vitejs.dev/) Build tool that aims to provide a faster and leaner development experience for modern web projects (version: 4.1.0)
- [React](https://reactjs.org/) JavaScript library for building user interfaces (version: 18.2.0)
- [Typescript](https://www.typescriptlang.org/) Javascript superset, which add static typing to Javascript (version: 4.9.3)
- [SASS](https://sass-lang.com/) CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world (version: 1.58.3)
- [Vitest](https://vitest.dev/) A Vite-native unit test framework (version: 0.29.2)
- [React Testing Library](https://testing-library.com/) Set of helpers that let you test React components without relying on their implementation details (version: 14.0.0)
- [React Router](https://reactrouter.com/) Standard library for routing in React, allows us to build a single-page web application (version: 6.8.2)
- [Axios](https://axios-http.com/) Promise based HTTP client for the browser and node.js (version: 1.3.4)

## Screenshots

![LoL Profile Test](https://github.com/Krycha94/lol-profile/blob/main/public/lol-profile-test.jpg?raw=true)

## Installation

Clone repo and install all the dependencies

```
git clone https://github.com/Krycha94/lol-profile.git
npm install
```

Create file named

```
.env
```

Which will contain all environmental variable

```
VITE_API_KEY=<YOUR RIOT API KEY>
```

Run app

```
npm run dev
```
