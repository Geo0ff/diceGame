     // global scope 
     
     var scores, roundScore, activePlayer,gamePlaying;
     init ();
    
     document.querySelector('.btn-roll').addEventListener('click', function() {
         if ( gamePlaying) { 

         
         
        // 1. Random number 
        var dice = Math.floor(Math.random() *6) + 1;
        //2.display the result 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = "block";
        diceDOM.src = 'dice' + dice + '.png';
        //3 update the round score if the rolled number was not a 1 
        if (dice !== 6) { 
            //add score
            roundScore += dice; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        } else  { 
            //next player ternary operator 
            nextPlayer(); 
        }
          }
        });

        document.querySelector('.btn-hold').addEventListener('click', function() {
            if (gamePlaying) {
                 //add current score to global score 
            scores[activePlayer] += roundScore;
            

            // update the ui 
            
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
             var input = document.querySelector('.final-score').value;
             console.log(input);
            //check if player won the game 
            if (scores[activePlayer] >= 50) { 
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
             } else { 
                   //next player 
             nextPlayer();
             }

            }
           
               });

        function nextPlayer() {
            //next player ternary operator 
         activePlayer === 0 ? activePlayer = 1  : activePlayer = 0;
         roundScore = 0; 

         document.getElementById('current-0').textContent = '0'; 
         document.getElementById('current-1').textContent = '0'; 
           // toggle add the class if the class is not there and if the class is already there it is removed it  
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');

          
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
        }

        document.querySelector('.btn-new').addEventListener('click', init);
        function init() { 
            scores = [0,0];
            activePlayer = 0; 
            roundScore =0;
            gamePlaying = true;

            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';

           
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
        }


    


