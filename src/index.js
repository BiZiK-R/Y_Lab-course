import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

// Состояние приложения
const store = new Store({
  items: [
    {code: 1, title: 'Название элемента', counter: 0},
    {code: 2, title: 'Некий объект', counter: 0},
    {code: 3, title: 'Заголовок', counter: 0},
    {code: 4, title: 'Короткое название', counter: 0},
    {code: 5, title: 'Запись', counter: 0},
    {code: 6, title: 'Пример названия', counter: 0},
    {code: 7, title: 'Седьмой', counter: 0}
  ]
});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store}/>, root);
