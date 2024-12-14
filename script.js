const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');
let msg = document.getElementById("thankYouMessage")

function moveButton() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth - 20));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight - 20));

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function showThanks() {
    const txt = "Thank You for Loving Me Ammu 💓💓"
    msg.innerHTML = txt
}
noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For mobile touch devices
yesBtn.addEventListener('click', showThanks)
// Optionally, adjust on resize to ensure the button remains within the viewport
window.addEventListener('resize', moveButton);
