const noBtn = document.getElementById('noButton');

function moveButton() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth - 20));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight - 20));

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For mobile touch devices

// Optionally, adjust on resize to ensure the button remains within the viewport
window.addEventListener('resize', moveButton);
