function showThanks() {
    document.getElementById("thankYouMessage").style.display = "block";
    document.getElementById("yesButton").disabled = true;
    document.getElementById("noButton").disabled = true;
}

const noBtn = document.getElementById('noButton');

// Use the 'mouseenter' or 'mouseover' event to trigger when hovering over the button
noBtn.addEventListener('mouseenter', function() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
