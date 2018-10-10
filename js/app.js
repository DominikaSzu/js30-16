const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

function shadow(e) {
    const { offsetHeight: height, offsetWidth: width } = hero;
    let { offsetX: x, offsetY: y } = e;
    const walk = 100;
    
    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    console.log(xWalk);
    console.log(yWalk);
    
    text.style.textShadow = `${xWalk}px ${yWalk}px 0`;
}

hero.addEventListener('mousemove', shadow);