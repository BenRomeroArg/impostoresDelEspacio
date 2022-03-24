
var totalScore = 0;
const result = document.querySelector('#resultado');
const impact = document.querySelector('#impacto');
const score = document.querySelector('#score');
var plus = 32 * 16;
var resultadofinal;
const totalEnemyVencido = document.querySelector('#enemigosVencidos');
var extrapoint = 127;

function isShoot(enemy) {
    
    enemy.classList.add("dead");
    totalScore+=1;
    resultadofinal = totalScore * plus;
    score.innerHTML=  `Score: ${resultadofinal}`;
    score.innerHTML;
    totalEnemyVencido.innerHTML=  `Dead: ${totalScore}`;
    totalEnemyVencido.innerHTML; 

    if(!livingEnemies().length){  
       resultFinal();
    }   
    
}
function enemyAttacksMe(enemy) {
    enemy.classList.add("showing");
    setTimeout( () => {
     enemyShootsMe(enemy); 
    }, 3500);
    setTimeout( () => {
     enemy.classList.remove("showing");
    }, 3100);
}
function enemyShootsMe(enemy) {
    
    if(!enemy.classList.contains("dead")) {
        enemy.classList.add("shooting");
        updateHealthPoints(healthPoints - 25);      
        impact.innerHTML="Danger...";
        impact.innerHTML;
        setTimeout( () => {
            impact.innerHTML="";
            impact.innerHTML;
                    
          enemy.classList.remove("shooting");
        },2300);
    }      
}
function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");
}
function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies() [randomEnemyNo];

    var randomDelay = Math.random() * 3700 + 1500;

    setTimeout( () => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();                                                               
    }, randomDelay);
}
var healthPoints = 100;
function updateHealthPoints (points) {
    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%";
    if (healthPoints < 1) {
      resultFinal();        
    }                
}
function resultFinal(){
    if(!livingEnemies().length){
        result.innerHTML="YOU WIN";
        result.innerHTML;
       
        return  alert("Vencimos a los invasores, tu recompenza es: $1000000 " );    
    }
    if(livingEnemies().length) {
        result.innerHTML="Game Over";
        result.innerHTML;
        alert("Nos vencieron..Total de enemigos vencidos: " + totalScore);  
    }
    return document.location.reload(2000);   
}
function NewGame() {
   randomEnemyAttacks(); 
   document.querySelector("#start").style.display = "none";
}
function reset(){
    
    document.querySelector("#reset").style.display = "none";
    return document.location.reload(2000);
    
}
   