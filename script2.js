const buttonHeight = 50;
const buttonWidth = 150;

// Adjusting the positioning to ensure it stays within the viewport
const maxWidth = window.innerWidth - buttonWidth - 10; // Subtracting 10 to consider padding
const maxHeight = window.innerHeight - buttonHeight - 10; // Subtracting 10 to consider padding

window.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');

    btnYes.addEventListener('click', () => {
        startConfetti();
        alert('Wise choice');
    });

    btnNo.addEventListener('click', () => {
        alert('Verkeerde keuse, probeer weer!');
        randomizeButtonPosition(btnNo);
    });

    btnNo.addEventListener('mouseover', () => {
        randomizeButtonPosition(btnNo);
    });
});

function randomizeButtonPosition(button) {
    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
}

function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const confettiSettings = { target: canvas };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}
document.getElementById('readMore').addEventListener('click', function() {
    document.getElementById('moreText').classList.toggle('hide');
    this.style.display = 'none';
});


