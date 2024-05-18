'use strict';

let random_n =  Math.trunc( Math.random() * 20 ) + 1;

// document.querySelector('.guess').value = random_n;

document.querySelector('.check').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('h1').textContent = 'Guess My Number!';
    document.querySelector('h1').style.border = 'none';
    const Numberguess = Number(document.querySelector('.guess').value);
    if (!Numberguess || Numberguess < 0){
        document.querySelector('.message').textContent = 'Invalid Input number !';
    }
    else{
        if  (Number(document.querySelector('.score').textContent) - 1 >= 0){
        if (Numberguess > random_n){
            document.querySelector('.message').textContent = 'Your Number is to High Retry !';
                document.querySelector('.score').textContent   = Number(document.querySelector('.score').textContent) - 1;
        }
        else if (Numberguess < random_n){
                document.querySelector('.message').textContent = 'Your Number is to Low Retry !';
                document.querySelector('.score').textContent   = Number(document.querySelector('.score').textContent) - 1;
            }
        else{
            document.querySelector('.message').textContent = 'winner winner chicken dinner !'.toUpperCase();
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '90rem';
            document.querySelector('.number').textContent = random_n;
        }
    }
    else{
        document.querySelector('.message').textContent = 'Your Score is 0 you can\'t  Play Now !';
        document.querySelector('body').style.backgroundColor = '#ff073a';
        document.querySelector('h1').textContent = 'Loser ! Press \'Again\'';
    }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#515151';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent   = 20;
    document.querySelector('h1').textContent = 'Guess My Number!';
    document.querySelector('h1').style.border = 'none';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    random_n =  Math.trunc( Math.random() * 20 ) + 1;
})

document.querySelector('.Hint').addEventListener('click', function(){
    if (Number(document.querySelector('.score').textContent) < 2){

    document.querySelector('h1').textContent = `The Secret Number is beetwen ${random_n - 4} and ${random_n +3}`;
    document.querySelector('h1').style.fontSize = '2rem';
    document.querySelector('h1').style.border = '1px solid #ff073a';
}
else{
    document.querySelector('h1').textContent = 'You Can\'t Use this option For now';
}

})