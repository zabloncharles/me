// Function to generate a random bright color
function getRandomBrightColor() {
  const r = Math.floor(Math.random() * 100 + 100); // Ensures brighter colors
  const g = Math.floor(Math.random() * 155 + 100); // Ensures brighter colors
  const b = Math.floor(Math.random() * 155 + 100); // Ensures brighter colors

  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomDarkColor() {
  const r = Math.floor(Math.random() * 125); // Values closer to 0 for darker colors
  const g = Math.floor(Math.random() * 10); // Values closer to 0 for darker colors
  const b = Math.floor(Math.random() * 20); // Values closer to 0 for darker colors

  return `rgb(${r}, ${g}, ${b})`;
}

// Function to create a linear gradient from black to bright
function getRandomLinearGradient() {
  const color1 = getRandomBrightColor(); // Black at the bottom
  const color2 = getRandomDarkColor();

  const gradient = `linear-gradient(45deg, ${color1}, transparent)`;

  return gradient;
}

// Get all the project cards and apply random gradients from black to bright
const projectCards = document.getElementsByClassName("project-grid-box");

for (let i = 0; i < projectCards.length; i++) {
  const card = projectCards[i];
  const randomGradient = getRandomLinearGradient();
  card.style.background = randomGradient;
}
