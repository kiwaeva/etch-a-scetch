const div = document.querySelector('#container')

//add 16 x 16 divs

for (let i = 1; i < 257; i++){
    const newdiv =document.createElement('div');
    div.appendChild(newdiv);
}