const body = document.querySelector('body')
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const target__px = document.querySelector('.target__px')

body.addEventListener('mousemove', e => {
      x = e.pageX;
      y = e.pageY;

      vertical.style.left = `${x}px`
      horizontal.style.top = `${y}px`

      target.style.left = `${x}px`
      target.style.top = `${y}px`

      target__px.style.left = `${x}px`
      console.log(x,y);
      target__px.style.top = `${y}px`
      target__px.innerHTML = `${x}px, ${y}px`
    });