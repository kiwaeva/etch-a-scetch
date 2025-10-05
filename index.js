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

    if (isNaN(num) || num <= 0) {
    alert('Please enter a valid positive number');
    return;
}

//Clear existing grid
container.innerHTML = "";

for (let i = 0; i < num; i++){
    const createGrid = document.createElement('div');
    createGrid.classList.add('grid-square');
    createGrid.textContent = i + 1;

    createGrid.addEventListener('mouseenter',(e) =>{
        e.target.classList.add('color-change');
    });

        container.appendChild(createGrid);
    }
});