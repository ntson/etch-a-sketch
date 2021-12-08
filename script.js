// Global state
let mode = '';

// Create a refrence to the grid
const grid = document.getElementById('grid');

// Fill up the grid with squares
const populateGrid = function (rows, columns) {
  grid.innerHTML = '';

  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  for (let i = 0; i < rows * columns; i++) {
    const square = document.createElement('div');
    square.id = 'square';

    square.classList.add('square');
    grid.appendChild(square);

    square.addEventListener('mouseenter', function () {
      if (mode === 'draw') {
        square.classList.add('filled');
      } else if (mode === 'clear') {
        square.classList.remove('filled');
      }
    });
  }
};

// Select grid size
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  const rows = parseInt(formProps.row, 10);
  const columns = parseInt(formProps.column, 10);

  populateGrid(rows, columns);
});

// Trigger eraser
const eraseButton = document.getElementById('erase-button');
eraseButton.addEventListener('click', function () {
  mode = 'clear';
});

// Trigger pencil
const beginButton = document.getElementById('begin-button');
beginButton.addEventListener('click', function () {
  mode = 'draw';
});

// Clear everything
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
  const squares = document.querySelectorAll('#square');
  squares.forEach((s) => s.classList.remove('filled'));
});

// Load the initial, default grid
window.onload = function () {
  populateGrid(16, 16);
};
