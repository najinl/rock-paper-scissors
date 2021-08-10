# Rock, Paper, Scissors (Solo Mod-1 Final Project)

## Project Repo
https://github.com/najinl/rock-paper-scissors

## Technology
Javascript, HTML, CSS, Chrome Dev Tools, Github

## Setup
- Fork this web app to your own Github account
- Clone the repository to your local machine
- `cd` into the file
- View web app by running `index.html` with in your terminal.


## Project Overview
The project entails building a rock, paper, scissors game with two different game modes: classic and difficult. The players include you (the human) and the computer. Scores for each of the players will persist on the left and right side of the page, wheras the main player board (or central area on the application) is constantly changing. Once a player selects a game mode, the characters (or fighters) that the human can select from are displayed. Once the human player chooses a fighter the screen changes to show the human fighter selection next to the computer fighter selection and the winner of the round at the top of the page. The score card of the winner will change to include an additional win point. At any point after the first play of a game mode a button under the human score card information that will allow for the human to return to the main page and switch game modes will be visible. Local storage was implemented in this project to allow for the scores to carry over each time the game mode is switched and upon refresh of the page.

## Learning Goals
The goals of this project were to:
- Demonstrate an understanding of local storage to persist data
- Utilize DRY JavaScript
- Employ event delegation
- Display an understanding of the difference between the Data Model and the DOM.  

## Code Architecture
- The application's data model consist of four .js files.
  1. player.js: this is the class constructor for both the computer player and the human player. It includes only three methods, one that allows a player to take a      turn and assigns to that turn to the playChoice property, another that saves the win tally for a player to local storage and another to retrieve those play          wins.


## Web App Attributes
- User is greated swith a home screen, which shows their user token, name, and a beginning score of 0 wins on the right hand side of the page. The middle of the page has a prompt for the user to select a game mode: classic or difficult. When the user hovers over the game mode, it will be highlighted in white and the text will turn dark pink.

![image](https://user-images.githubusercontent.com/68795578/128896137-95e9dd8d-5fe8-4de9-a43f-ad00dd9f4480.png)
<img width="1428" alt="Screen Shot 2021-08-10 at 9 58 47 AM" src="https://user-images.githubusercontent.com/68795578/128896331-020f0e40-6ddf-43a8-ab70-d574fa1516a4.png">

- Once user selects a game mode, the gameboard section will be populated with fighter (or character) choices for the human to play. The prompt for choosing a game mode will change to "choose your fighter". The human can see that they are able to select their choice of fighter by clicking the fighter image, because when they hover over fighters their cursor turns into a hand. Once the the human selects their fighter the gameboard screen will change to only show their fighter selection and the computer's fighter selection side by side (adjacent to the player card who selected them). Additionally, a button under the human player win value on the left side of the screen will appear that allows the player to change game modes. The prompt for the player to "choose your fighter" will change to indicate who won the round or if it was a tie.

![image](https://user-images.githubusercontent.com/68795578/128896720-b86c6ea7-a006-4fd7-ba3e-9c7b9a5704a1.png)
![Draw](https://user-images.githubusercontent.com/68795578/128900133-69d9538d-0381-438d-9dc5-e53e3bbcce18.png)
![image](https://user-images.githubusercontent.com/68795578/128897641-919c0d15-be6b-4456-b0db-6d588477780e.png)
![Computer Win](https://user-images.githubusercontent.com/68795578/128900163-90f3028c-b3e3-4a7b-b0be-c95ac41db85b.png)

- Once the player clicks the "Change Game?" button, they will be taken back to the home screen where they are again prompted to "Choose your game!". If difficult mode is selected, then the player selection is then updated with not three, BUT FIVE fighter options for the human to player to select from. The computer and human selections will show side by side, just the same as they did in classic mode, after the human play is selected. A timeout will automatically reset the gameboard so that all fighters are selectable 1s after each round. Best part of all of this is that the game wins will carry from game mode to game mode no matter how many times the player switches modes (God bless you local storage).

<img width="1416" alt="Screen Shot 2021-08-10 at 10 47 50 AM" src="https://user-images.githubusercontent.com/68795578/128900523-ad2cab9b-3a12-408e-be4c-403c1019e932.png">
<img width="1425" alt="Screen Shot 2021-08-10 at 10 48 08 AM" src="https://user-images.githubusercontent.com/68795578/128900574-f965557e-23b3-418a-a119-310db71f222f.png">


## Contributors
- Nadia Naji
