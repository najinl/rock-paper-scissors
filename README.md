# Rock, Paper, Scissors (Group Project)

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
- Display an understanding of the difference       between the Data Model and the DOM.  

## Web App Attributes
- User is greated swith a home screen, which shows their user token, name, and a beginning score of 0 wins on the right hand side of the page. The middle of the page has a prompt for the user to select a game mode: classic or difficult. When the user hovers over the game mode, it will be highlighted in white and the text will turn dark pink.
![image](https://user-images.githubusercontent.com/68795578/128896137-95e9dd8d-5fe8-4de9-a43f-ad00dd9f4480.png)
<img width="1428" alt="Screen Shot 2021-08-10 at 9 58 47 AM" src="https://user-images.githubusercontent.com/68795578/128896331-020f0e40-6ddf-43a8-ab70-d574fa1516a4.png">

- Once user selects a game mode, the gameboard section will be populated with fighter (or character) choices for the human to play. The prompt for choosing a game mode will change to "choose your fighter". The human can see that they are able to select their choice of fighter by clicking the fighter image, because when they hover over fighters their cursor turns into a hand. Once the the human selects their fighter the gameboard screen will change to only show their fighter selection and the computer's fighter selection side by side (adjacent to the player card who selected them). Additionally, a button under the human player win value on the left side of the screen will appear that allows the player to change game modes. The prompt for the player to "choose your fighter" will change to indicate who won the round or if it was a tie.
![image](https://user-images.githubusercontent.com/68795578/128896720-b86c6ea7-a006-4fd7-ba3e-9c7b9a5704a1.png)
![image](https://user-images.githubusercontent.com/68795578/128897641-919c0d15-be6b-4456-b0db-6d588477780e.png)
![image](https://user-images.githubusercontent.com/68795578/128898282-aafa3809-a008-4fc5-bba8-5a2943e000eb.png)
![image](https://user-images.githubusercontent.com/68795578/128898485-e8736323-3211-4bf2-b4ad-2c5ab5578a0c.png)

- Allow user to input a time in minutes and seconds
<img width="1439" alt="Screen Shot 2021-08-03 at 8 06 02 PM" src="https://user-images.githubusercontent.com/39206140/128111100-8a8b6bb7-6b94-4235-aae7-bdfc35315385.png">

- User will see a visual representation of a timer and will be congratulated when timer hits 0.
<img width="1437" alt="Screen Shot 2021-08-03 at 8 06 29 PM" src="https://user-images.githubusercontent.com/39206140/128111164-379d0230-edcb-4730-b66b-9f6292ec655a.png">

- User will be allowed to set a new activity and goal.
<img width="1424" alt="Screen Shot 2021-08-03 at 8 06 38 PM" src="https://user-images.githubusercontent.com/39206140/128111228-89eaee68-c211-466b-ae57-32c93d5d1268.png">

- User will see a visual representation of activities they have created represented by cards.
<img width="1435" alt="Screen Shot 2021-08-03 at 8 08 15 PM" src="https://user-images.githubusercontent.com/39206140/128111274-014fba44-da66-46a6-a4a9-75959177baae.png">



## Contributors
- Nadia Naji
