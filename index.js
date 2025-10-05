const container = document.querySelector('#container')

//Function to create grid without changing the total amount of px
const createGrid = (num) => {
    container.innerHTML = ""; //Clear existing squares
    const squareSize = 960 / num; // each swuare's width & height in px

    for(let i = 0; i < num * num; i++){
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', (e) => {
            e.target.classList.add('color-change');
        });

        container.appendChild(square);
    }
}

//Initial grid 16x16
createGrid(16);

//Button click popup with input for the number

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    const num = parseInt(prompt('What number of squares do you want in your new grid?'));

    if (isNaN(num) || num <= 0 || num > 64) {
    alert('Please enter a valid number between 1 and 64.');
    return;
}

    createGrid(num)
});
