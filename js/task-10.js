// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При 
// нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько < div >, сколько указано в amount и добавляет их в 
//  div#boxes.

//     Размеры самого первого <div> - 30px на 30px.
//     Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//     Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую 
//     функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым
//  удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  inpNum: document.querySelector('input'),
  placeDiv: document.getElementById('boxes')
}

refs.btnCreate.addEventListener('click', onCreate);
refs.btnDestroy.addEventListener('click', onDestroy);

function onCreate() {
  const amount = refs.inpNum.value;
  if (!amount) {
    alert('Please input a value!');
    return
  }
  const divTree = createBoxes(amount);
  refs.placeDiv.insertAdjacentHTML('beforeend', divTree);
}

function createBoxes(amount) {
  let markup = [];
  for (let i = 0; i < amount; i++) {
    markup.push(`<div style="display:box; background-color: ${getRandomHexColor()}; width: ${10*i + 30}px; height: ${10*i + 30}px"></div>`);
  }
  return(markup);
}

function onDestroy() {
  if (refs.placeDiv.innerHTML) {
    refs.placeDiv.innerHTML = '';
    refs.inpNum.value = 1;
  }
}
