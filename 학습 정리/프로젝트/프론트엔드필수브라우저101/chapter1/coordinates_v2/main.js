const body = document.querySelector('body')
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const target__px = document.querySelector('.target__px');
const targetBoundingRect = target.getBoundingClientRect();

body.addEventListener('mousemove', e => {
      x = e.pageX;
      y = e.pageY;

      vertical.style.transform = `translateX(${x}px)`
      horizontal.style.transform = `translateY(${y}px)` 

      target.style.transform = `translateX(${x - targetBoundingRect.width / 2}px) translateY(${y - targetBoundingRect.height / 2}px)` 
      target__px.style.transform = `translateX(${x + 30}px) translateY(${y + 15}px)`
      target__px.innerHTML = `${x}px, ${y}px`
    });