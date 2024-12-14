const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');
let msg = document.getElementById('thankYouMessage')

function moveButton() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth - 20));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight - 20));

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function showThanks() {
    let str = "Thank you for loving me Ammu 💖💖!";
    msg.innerHTML = str;

}

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('touchstart', moveButton);
yesBtn.addEventListener('click', showThanks)
window.addEventListener('resize', moveButton);
