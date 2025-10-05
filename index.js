const container = document.querySelector('#container')

//add 16 x 16 divs

  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.addEventListener('mouseenter', (e) => {
      e.target.classList.add('color-change');
    });
    container.appendChild(newDiv);
  }

//create a popup to ask for a number

const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    const num = parseInt(prompt('What number of squares do you want in your new grid?'));

    if (isNaN(num) || num <= 0 || num > 19) {
    alert('Please enter a valid positive number that is less than 20.');
    return;
}

//Clear existing grid
container.innerHTML = "";

for (let i = 0; i < num * num; i++){
    const createGrid = document.createElement('div');
    createGrid.addEventListener('mouseenter',(e) =>{
        e.target.classList.add('color-change');
    });

        container.appendChild(createGrid);
    }
    // Adjust grid layout (CSS required for this to work visually)
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
});
