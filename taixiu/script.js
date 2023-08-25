// script.js
const diceResult = document.getElementById('dice-result');
const rollButton = document.getElementById('roll-button');
const diceImage = document.getElementById('dice-image');

rollButton.addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `dice${randomValue}.png`;
});
