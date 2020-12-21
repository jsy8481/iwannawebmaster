const shoppingList = document.querySelector('.shoppingList');
const target = document.querySelector('.target');
const plusButton = document.querySelector('.plusButton');

target.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        plusButton.click();
    }
});

plusButton.addEventListener('click', ()=>{
    shoppingItemName = target.value;
    
    shoppingItem = document.createElement('li');
    shoppingItem.setAttribute('class', 'shoppingItem');
    shoppingItem.innerHTML = `
        <span>${shoppingItemName}</span>
        <i what=1 class="fas fa-trash-alt"></i>
    `
    shoppingList.appendChild(shoppingItem);

    shoppingItem.scrollIntoView();

    // 초기화
    target.value = '';
    target.focus();
})

shoppingList.addEventListener('click', (e)=>{
    if(e.target.classList.contains("fa-trash-alt")){
        shoppingList.removeChild(e.target.parentNode);
    }
})
