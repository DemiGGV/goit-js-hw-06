// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//     Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//     Обновляй интерфейс новым значением переменной counterValue.



//  Перший спосіб:

// const btnDecr = document.querySelector('[data-action="decrement"]');
// const btnIncr = document.querySelector('[data-action="increment"]');
// const valueEl = document.getElementById('value');

// const handleClick = event => {
//     switch (event.currentTarget.dataset.action) {
//         case 'increment':
//             valueEl.textContent = ~~valueEl.textContent + 1;
//             break;
//         case 'decrement':
//             valueEl.textContent = ~~valueEl.textContent - 1;
//             break;
//     }
// };

// btnDecr.addEventListener("click", handleClick);
// btnIncr.addEventListener("click", handleClick);


//  Другий спосіб:

const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');
let counterValue = 0;

const handleClick = event => {
    switch (event.currentTarget.dataset.action) {
        case 'increment':
            counterValue += 1;
            break;
        case 'decrement':
            counterValue -= 1;
            break;
    }
    valueEl.textContent = counterValue;
};

btnDecr.addEventListener("click", handleClick);
btnIncr.addEventListener("click", handleClick);
