// Create grid
const grid = document.getElementById('grid');

// Fill up the grid with squares
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  grid.appendChild(square);
  square.addEventListener('mouseenter', function () {
    square.classList.add('filled');
  });
}
