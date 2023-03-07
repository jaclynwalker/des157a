(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice:['images/1die.png','images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    const rollSound = new Audio('sounds/diceroll.m4a');
    const clapSound = new Audio('sounds/clapping.mp3');

    // start the game
    startGame.addEventListener("click", function(){
        // randomly set game index here...
        gameData.index = Math.round(Math.random());
        // console.log(`index: ${gameData.index}`);

        gameControl.innerHTML = '<h2 id="thegamehasstarted">The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        // add event for quit button
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
            rollSound.play();
        });
    }

    function throwDice(){
        // clear out actionArea
        actionArea.innerHTML = '';
        // get random values 1-6
        gameData.roll1 = Math.floor(Math.random()*6) + 1; //using ceil could result in zero
        gameData.roll2 = Math.floor(Math.random()*6) + 1;

        // sets a message and shows the dice
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        // put dice images on the screen; the dice array index needs to be one less than the roll value
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // console.log(gameData.rollSum);

        // if two 1s are rolled 
        if (gameData.rollSum == 2){
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>'
            gameData.score[gameData.index] = 0; //resets score to 0 at player index
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); // switches players: is gameData.index true or false? if gamaData index is 0 return false, else return true
            
            showCurrentScore();

            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //switches players
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`
            setTimeout(setUpTurn, 2000);

        }
        // if neither die is a 1...
        else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<div id="rollorpass"><button id="rollagain">Roll Again</button> <button id="pass">Pass</button></div>'

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2 id="playxwins">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            clapSound.play();
        
            actionArea.innerHTML ='';
            document.getElementById('quit').innerHTML = "Start a new game?";
        }
        else {
            showCurrentScore()
        }
    }
    function showCurrentScore() {
        score.innerHTML = `<div id="scoretitle"><p>Score:</p></div>
        <div class="playerscore">
            <div class="playerscorecard"><p class="playername">${gameData.players[0]}</p> <p class="points">${gameData.score[0]}</p></div>
            <div class="playerscorecard"><p class="playername">${gameData.players[1]}</p> <p class="points">${gameData.score[1]}</p></div>
        </div>`
    }
}());