
// Function to create a grid with a specified size
function createGrid(size) {
    const container = document.getElementById('grid-container');
    // Clear previous grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

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
        let opacity = 0; // Initial opacity
        let interactionCount = 0; // Track number of interactions

        item.addEventListener('mouseover', function() {
            if (opacity >= 1) return; // Stop increasing opacity once fully opaque

            // Randomize RGB values
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const color = `rgb(${red},${green},${blue})`;

            // Increase opacity progressively
            opacity += 0.1;

            // Ensure opacity doesn't go above 1
            if (opacity > 1) opacity = 1;

            // Set color and opacity
            item.style.backgroundColor = color;
            item.style.opacity = opacity.toFixed(1); // Limit opacity to one decimal place

            // Increment interaction count
            interactionCount++;

            // If it's the 10th interaction, set color to black
            if (interactionCount === 10) {
                item.style.backgroundColor = 'rgb(0, 0, 0)';
                item.style.opacity = '1'; // Ensure fully opaque black
                opacity = 1; // Stop further interactions
            }
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

    const container = document.getElementById('grid-container');
    // Clear previous grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Clear and resize the grid
    createGrid(newSize);
}

// Event listener for the clear button
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearAndResizeGrid);