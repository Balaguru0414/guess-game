'use strict';

document.querySelector('.message').textContent  = 'Start guessing...';

let score = 20;
let highScore = 0;

let secretNumber = Math.floor(Math.random()*20) + 1;
document.querySelector('.number').textContent = '🤔';
console.log(secretNumber);

// check button click function ----------------------------------

document.querySelector('.check').addEventListener('click',function () {
	
	let guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// when there is no input  -----------------------------------

	if (!guess) {
		document.querySelector(".message").textContent = 'No Enter Number ❌';
	}

	// when the player wins  -----------------------------------

	else if (secretNumber === guess) {
		document.querySelector('.message').textContent  = "Correct Answer 🎉 🎉";
		document.querySelector('body').style.background = '#379237';

		document.querySelector('.number').textContent = secretNumber;

		if (score > highScore) {
			highScore = score;
			highScore = document.querySelector('.highScore').textContent;
		}

							//		( OR )     //

		// if (score > highScore) {
		// 	document.querySelector('.highscore').textContent = score;
		// } 
		// highScore = document.querySelector('.highscore').textContent;

	} 

	// when guess is too high !  -----------------------------------

	else if (secretNumber < guess) {
		
		if (score > 1) {
			score--;
			document.querySelector('.score').textContent = score;
			document.querySelector('.message').textContent = "Too high !!!";

			document.querySelector('body').classList.add('animate');

			setTimeout(function () {
				document.querySelector('body').classList.remove('animate');
			},200);

		} else {
			document.querySelector('body').textContent = "😔 You last the game !";
						
			document.querySelector('.score').textContent = 0;
			document.querySelector('body').style.background = '#EB455F';
		}
			
	}

	// when guess is too low !  -----------------------------------

	else if (guess < secretNumber) {
		

		if (score > 1) {
			score--;
			document.querySelector('.score').textContent = score;
			document.querySelector('.message').textContent = "Too Low !!!";	

			document.querySelector('body').classList.add('animate');

			setTimeout(function () {
				document.querySelector('body').classList.remove('animate');
			},200);

		} else {
			document.querySelector('.message').textContent = "😔 You last the game !";					
			
			document.querySelector('.score').textContent = 0;
			document.querySelector('body').style.background = '#EB455F';
		}
	}
	
});


// New Guess button  ------------------------------

document.querySelector('.again').addEventListener('click',function () {

	document.querySelector('.message').textContent = 'Start guessing... ';
	
	document.querySelector('input').value = '';

	score = 20;

	document.querySelector('.score').textContent = score;

	document.querySelector('body').style.backgroundColor = '#222';

	secretNumber = Math.floor(Math.random()*20) + 1 ;
	document.querySelector('.number').textContent = '🤔' ;	

	console.log(secretNumber);

})






























