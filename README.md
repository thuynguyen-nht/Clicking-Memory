# Cliking-Memory
Clicking-Memory Game is a memory game with React. 

## How to play

This game is fairly simple to play. There are 12 delicious cookies on the game that you have to remember. It begins as you click on the image. Each 1st time clicked image is giving you 1 point. If you click on the already clicked image, you lose the game. Remember, do not click on the image twice.

## Goals of this project

This project is to show how to use React as the frontend framework.

React makes the process of generating interactive UI becomes so simple by break up an application's UI into components, manage component state, and respond to user events.  

By using React, developer can easily identify the components to edit, styling, and manipulate state of components without changing the DOM.

## Steps to begin the Reactjs App
1. Create the app with these commands below:

```bash
npx create-react-app app-name

cd app-name

npm start
```
It should automatically open your web browser to [http://localhost:3000/]( http://localhost:3000/) 

## Steps to deploy an React App into Github Pages
1. Install the gh-pages package as a "dev-dependency" of the app
```bash
npm install gh-pages --save-dev
```
2. Open you package.json, and add this line after version:

```bash
"homepage": "http://ishuamali.github.io/react-gh-pages"
```
3. Add predeploy and deploy scripts to scripts

```bash
"scripts": {    
   "start": "react-scripts start",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
},
```
4. Push your project to github before run this command:

```bash
npm run deploy
```
5. Set up the gh-pages branch.

- Go to your project setting
- Scroll down to the GitHub Pages section and choose gh-pages branch as the source.

## Steps to re-run deploy

If you have new change and want to re-deploy the app:
- Push new change to github master or branches if you dont want to be behind on other branches if you want to keep the record.
- Then,
```bash
npm run build
```
- Then, 
```bash
npm run deploy
```
## Play Game!
[Clciking-Memory](https://thuynguyen-nht.github.io/clicking-memory/)

## Github page for this game:
[Clciking-Memory](https://github.com/thuynguyen-nht/clicking-memory)

### Visit me at:
[Github page](https://github.com/thuynguyen-nht)