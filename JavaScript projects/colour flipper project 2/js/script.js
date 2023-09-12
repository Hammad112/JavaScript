

const buttonflipper = document.getElementById("btn");
const colorchanger = document.getElementById('body');
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#343a40'];

buttonflipper.addEventListener('click', function flipcolor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    colorchanger.style.backgroundColor = colors[randomIndex];
});

buttonflipper.addEventListener('click', function colorschanger() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    buttonflipper.style.backgroundColor = colors[randomIndex];
});