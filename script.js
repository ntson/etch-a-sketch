// Create grid
const grid = document.getElementById('grid');

let mode = '';

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
  mode = 'clear';
});

const beginButton = document.getElementById('begin-button');
beginButton.addEventListener('click', function () {
  mode = 'draw';
});

// Fill up the grid with squares
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
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
