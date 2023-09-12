let count = 0;

const counterValue = document.getElementById("count");
const decer = document.getElementById("decrease");
const increase = document.getElementById("incer");
const reseter = document.getElementById("reset");

reseter.addEventListener('click', () => {
    count = 0;
    counterValue.innerHTML = count;
})

decer.addEventListener('click', () => {
    count--;
    counterValue.innerHTML = count;
});

increase.addEventListener('click', () => {
    count++;
    counterValue.innerHTML = count;
})