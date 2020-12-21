const controller = document.querySelector(".header__controller");
const timer = document.querySelector(".time");
const gameMap = document.querySelector(".gameMap");
const remainCarrot = document.querySelector('.remainCarrot');

const popup = document.querySelector('.popup')
const replayButton = document.querySelector('.restart');
const popupMessage = document.querySelector('.popup__message');

let downtimer;
let timeout;
let carrot

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
        removeTimeEvent();
        makepopup("정지! 다시 시작할까요?");
    }
})

gameMap.addEventListener('click', (e)=>{
    if(e.target.classList.contains('carrot')){
        e.target.parentNode.removeChild(e.target);
        remainCarrot.textContent = remainCarrot.textContent - 1;

        // 승리 조건 확인
        if (remainCarrot.textContent === '0'){
            makeGameNotClickable();
            removeTimeEvent();
            makepopup("성공! 모든 당근을 클릭했어요");
        }
    }

    if(e.target.classList.contains('bug')){
        makeGameNotClickable();
        removeTimeEvent();
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
    gameMap.style.display = 'block';
    gameMap.innerHTML = '';
    // 시간
    timer.textContent = "00:10"
    downTimer = setInterval(()=>{
        
        newTime = timer.textContent.slice(3) - 1
        if (newTime < 10){
            timer.textContent = `00:0${newTime}`
        } else {
            timer.textContent = `00:${newTime}`
        }
    }, 1000)

    timeOut = window.setTimeout(()=>{
        makeGameNotClickable();
        removeTimeEvent();
        makepopup("실패! 시간을 초과하셨습니다.");
        // 실패했는지 확인
    }, 10000)
    // 당근 및 벌레 배치 하기
    for (let index = 0; index < 10; index++) {
        carrot = document.createElement('img');
        carrot.setAttribute('class', 'carrot');
        carrot.setAttribute('src', 'img/carrot.png');
        carrot.style.bottom = `${Math.random() * 100}%`;
        carrot.style.right = `${Math.random() * 100}%`;
        gameMap.appendChild(carrot)
        console.log(gameMap.childNodes);
    }

    for (let index = 0; index < 10; index++) {
        bug = document.createElement('img');
        bug.setAttribute('class', 'bug');
        bug.setAttribute('src', 'img/bug.png');
        bug.style.bottom = `${Math.random() * 100}%`;
        bug.style.right = `${Math.random() * 100}%`;
        gameMap.appendChild(bug);
    }
    // 남은 당근
    remainCarrot.textContent = 10;
}

const makepopup = function(message){
    popup.style.display = 'flex';
    popupMessage.textContent = message;
}

const makeGameNotClickable = function(){
    controller.classList.add('notClickable');
    gameMap.classList.add('notClickable');
}

const removeTimeEvent = function(){
    clearInterval(downTimer);
    clearTimeout(timeOut);
}