function createBalloon() {
    const balloon = document.createElement('img');
    balloon.src = 'img/ballon1.svg';
    balloon.alt = '';
    balloon.classList.add('balloon');
    document.body.appendChild(balloon);

    const startX = Math.random() * window.innerWidth;
    const endX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3000 + 2000; // Random duration between 2000ms and 5000ms

    balloon.style.left = startX + 'px';
    balloon.style.animation = `falling ${duration}ms linear`;

    setTimeout(() => {
        balloon.remove();
    }, duration);
}

function popBalloon(element) {
    element.remove();
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        createBalloon();
    }
});
