const square = document.getElementById('colorSquare');


square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'green';
});


square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'blue';
});
