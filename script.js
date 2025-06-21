const p1={
    score:0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Score')
};
const p2={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Score')
};

const winningScoreSelect=document.querySelector('#playto');
const reset=document.querySelector('#reset');

let winningScore=parseInt(winningScoreSelect.value);
let isGameOver=false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score>opponent.score){
            player.display.style.color='green';
            opponent.display.style.color='red';
        }
        if(player.score===opponent.score){
            player.display.style.color='green';
            opponent.display.style.color='green';
        }
        if(player.score===winningScore){
            isGameOver=true;
            player.display.classList.add('winner');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score;
    }
}

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
});
p1.button.addEventListener('click',function(){
    updateScores(p1,p2);
});
p2.button.addEventListener('click',function(){
    updateScores(p2,p1);
});
reset.addEventListener('click',resetGame);

function resetGame(){
    isGameOver=false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove('winner');
        p.display.style.removeProperty('color');
        p.button.disabled=false;
    }
}