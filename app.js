// Function to create a grid with a specified size
function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear previous grid

    // Calculate total number of grid items
    const totalItems = size * size;

    // Create grid items dynamically
    for (let i = 0; i < totalItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }

    // Set CSS grid properties dynamically
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Add event listener to each grid item for hover effect
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            // Randomize RGB values
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const color = `rgb(${red},${green},${blue})`;
            
            // Darken the color progressively
            let opacity = parseFloat(item.style.opacity) || 1;
            opacity -= 0.1;
            item.style.backgroundColor = color;
            item.style.opacity = opacity;
        });
    });
}

// Initial grid creation (16x16)
createGrid(16);

// Function to handle clearing grid and resizing based on user input
function clearAndResizeGrid() {
    let newSize = prompt("Enter number of squares per side (max 100):");
    newSize = parseInt(newSize);

    // Validate input
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Clear and resize the grid
    createGrid(newSize);
}

// Event listener for the clear button
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearAndResizeGrid);


