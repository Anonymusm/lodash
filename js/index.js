// // 1
const input = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const resizeImage = (value) => {
  const minSize = 100;
  const maxSize = 400;

  const newSize = (value / 100) * (maxSize - minSize) + minSize;
  image.style.width = `${newSize}px`;
};


const debouncedResize = _.debounce((event) => {
  resizeImage(event.target.value);
}, 100);

input.addEventListener("input", debouncedResize);

resizeImage(input.value);
// 2
const box = document.getElementById('box');

// Установлюємо абсолютне позиціонування (оскільки це не дозволено міняти в CSS)
box.style.position = 'absolute';
box.style.left = '0px';
box.style.top = '0px';

// Задебоунсена функція переміщення
const moveBoxDebounced = _.debounce(function(event) {
  const x = event.clientX;
  const y = event.clientY;
  box.style.left = x + 'px';
  box.style.top = y + 'px';
}, 100);

// Призначення обробника події миші
document.addEventListener('mousemove', moveBoxDebounced);
