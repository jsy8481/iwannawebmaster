/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevDices, winnerScore;

// 초기화는 새로운 게임 버튼에서도 사용함으로 함수로 빼내자
init();

function btn(){
    // Do something here
}

// 콜백 함수는 다른 함수의 인자로 들어가며, 그 함수가 호출해줄 것으로 기대함
// document.querySelector('.btn-roll').addEventListener('click', btn);

// querySelector보다 getElementById가 빠름으로 id가 있다면 활용하자


// 익명 함수도 이용 가능
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        // Do something here
        // 1. Random number
        var dice
        // 2. Display the result
        // querySelector는 시간이 걸림으로 선택을 변수로 저장해두자
        var diceDOMs = document.querySelectorAll('.dice');
        console.log('round');
        for(var i=0; i < diceDOMs.length; i++){
            dice = Math.floor(Math.random()*6 + 1);
            console.log(dice);
            diceDOMs[i].style.display = 'block'
            diceDOMs[i].src = 'dice-' + dice +'.png';

            // 3. Update the round Score IF the rolled number was not a 1
            if (dice === 6 && prevDices[i] === 6){
                nextPlayer();
                break;
            } else if (dice !== 1){
                // Add score
                roundScore += dice;
                document.querySelector('#current-'+activePlayer).textContent 
                = roundScore;

                prevDices[i] = dice;
            } else {
                // Next player
                // 조건 ? true 실행 : False 실행
                nextPlayer()
                break;
            }  
        }
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        // console.log(this); 선택된 btn-hold dom

        // Add Current score to global score
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // Check if player won the game
        if (scores[activePlayer] >= winnerScore){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            var diceDOMs = document.querySelectorAll('.dice');
            for(var i=0; i < diceDOMs.length; i++){
                diceDOMs[i].style.display = 'none';
            }
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        } else{
            // Next Player
            nextPlayer()
        }
    }
    
});

// Don't repeat yourself
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevDices = [-1,-1];
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    // document.querySelector('.player-0-panel').classList.add('active')
    // document.querySelector('.player-1-panel').classList.remove('active')

    var diceDOMs = document.querySelectorAll('.dice');
    for(var i=0; i < diceDOMs.length; i++){
        diceDOMs[i].style.display = 'none';
    }
    diceDOMs[1].style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    prevDices = [-1,-1];

    var diceDOMs = document.querySelectorAll('.dice');
    for(var i=0; i < diceDOMs.length; i++){
        diceDOMs[i].style.display = 'none';
    }

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    
    if (document.getElementById('winnerScore').value){
        winnerScore = document.getElementById('winnerScore').value;
    } else {
        winnerScore = 100;
    }
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/