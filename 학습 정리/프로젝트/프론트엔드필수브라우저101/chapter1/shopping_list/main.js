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

    shoppingItem__name = document.createElement('span');
    shoppingItem__name.textContent = shoppingItemName;
    shoppingItem.appendChild(shoppingItem__name);

    shoppingItem__trash = document.createElement('i');

    shoppingItem__trash.setAttribute('class', 'fas fa-trash-alt');
    shoppingItem__trash.addEventListener('click', (e)=>{
        shoppingList.removeChild(e.target.parentNode);
    })
    
    shoppingItem.appendChild(shoppingItem__trash);

    shoppingList.appendChild(shoppingItem);

    shoppingItem.scrollIntoView();

    // 초기화
    target.value = '';
    target.focus();
})

