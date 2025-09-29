const container = document.querySelector('#container')

//add 16 x 16 divs

  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.addEventListener('mouseenter', (e) => {
      e.target.classList.add('color-change');
    });
    container.appendChild(newDiv);
  }

