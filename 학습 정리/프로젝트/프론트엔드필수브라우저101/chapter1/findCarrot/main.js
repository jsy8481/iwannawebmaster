const controller = document.querySelector(".header__controller");
const timer = document.querySelector(".time");
const gameMap = document.querySelector(".gameMap");
const remainCarrot = document.querySelector('.remainCarrot');

const popup = document.querySelector('.popup')
const replayButton = document.querySelector('.restart');
const popupMessage = document.querySelector('.popup__message');

let downtimer;
let timeout;
let time;
let carrot;
let score;

let GAMETIME = 10;
let CARROTNUM = 20;
let BUGNUM = 10;

controller.addEventListener('click', (e)=>{
    if(controller.classList.contains('start')){

        // 버튼 바꾸기
        controller.innerHTML = `
            <i class="fas fa-stop"></i>
        `
        // 클래스 바꾸기
        controller.classList.remove('start');
        controller.classList.add('stop');

        // 시작하기\
        start();

    }

    else if(controller.classList.contains('stop')){
       // replay 버튼 띄우기
        makeGameNotClickable();
        clearInterval(downTimer);
        makepopup("정지! 다시 시작할까요?");
    }
})

gameMap.addEventListener('click', (e)=>{
    if(e.target.classList.contains('carrot')){
        e.target.parentNode.removeChild(e.target);
        score++;
        remainCarrot.textContent = CARROTNUM - score;

        // 승리 조건 확인
        if (score === CARROTNUM){
            makeGameNotClickable();
            clearInterval(downTimer);
            makepopup("성공! 모든 당근을 클릭했어요");
        }
    }

    if(e.target.classList.contains('bug')){
        makeGameNotClickable();
        clearInterval(downTimer);
        makepopup("실패! 벌레를 클릭했어요");
    }
})

replayButton.addEventListener('click', ()=>{
    controller.classList.remove('notClickable');
    gameMap.classList.remove('notClickable');
    popup.style.display = 'none';

    start();
})

const start = function(){
    //1. 초기 세팅
    gameMap.innerHTML = '';
    remainCarrot.textContent = CARROTNUM;
    score = 0;
    // 시간
    time = GAMETIME;
    setTime(time);
    downTimer = setTimer();
    // 당근 및 벌레 배치 하기
    for (let index = 0; index < CARROTNUM; index++) {
        makeGameMapImg('carrot','img/carrot.png');
    }
    

    for (let index = 0; index < BUGNUM; index++) {
        makeGameMapImg('bug','img/bug.png');
    }

    makeBugMove();
}
const makeBugMove = function(){
    let bugs = document.querySelectorAll('.bug');
    moveBug = setInterval(()=>{
        bugs.forEach(bug => {
            let bottom = bug.style.bottom.slice(0, -1);
            let right = bug.style.right.slice(0, -1);
            makeBugDestiantion(bottom);
            bug.style.bottom = `${makeBugDestiantion(bottom)}%`
            bug.style.right = `${makeBugDestiantion(right)}%`
        });
    }, 150);
}

const makeBugDestiantion = function(current){
    let flag = 1;
    if (Math.random() > 0.5){
        flag = -1;
    }

    let destination = Number(current) + Math.random() * 3 * flag;
    destination = Math.max(0, destination);
    destination = Math.min(destination, 100);
    return destination;
}



const makeGameMapImg = function (className, src){
    img = document.createElement('img');
    img.setAttribute('class', className);
    img.setAttribute('src', src);
    img.style.bottom = `${Math.random() * 100}%`;
    img.style.right = `${Math.random() * 100}%`;
    gameMap.appendChild(img)
}

const makepopup = function(message){
    popup.style.display = 'flex';
    popupMessage.textContent = message;
    makeGameNotClickable();
}

const makeGameNotClickable = function(){
    controller.classList.add('notClickable');
    gameMap.classList.add('notClickable');
}

const setTimer = function(){
    let downTimer = setInterval(()=>{
        if (time === 0){
            makeGameNotClickable();
            clearInterval(downTimer);
            makepopup("실패! 시간을 초과하셨습니다.");
            return
        }

        time -= 1;
        setTime(time);

    }, 1000)

    return downTimer;
}

const setTime = function(time){
    minute = Math.floor(time / 60);
    sec = time % 60;
    timer.textContent = `${('0' + minute).slice(-2)}:${('0' + sec).slice(-2)}`
}