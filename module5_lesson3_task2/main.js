'use strict';

const goods = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': `Смартфон Xiaomi 11T – это представитель флагманской 
    линейки, выпущенной во второй половине 2021 года.И он полностью 
    соответствует такому позиционированию, предоставляя своим обладателям 
    возможность пользоваться отличными камерами, ни в чем себя не 
    ограничивать при запуске игр и других требовательных приложений.`,
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': `Внедорожник на дистанционном управлении. 
    Скорость 25км/ч. Возраст 7 - 14 лет`,
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': `Всего лишь один шаг сделает ваш телевизор умным, 
    Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает 
    в себе прочный процессор Cortex- A53 с чипом Amlogic S905D`,
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': `Витая пара Proconnect 01-0043-3-25 является 
    сетевым кабелем с 4 парами проводов типа UTP, в качестве 
    проводника в которых используется алюминий, плакированный медью CCA. 
    Такая неэкранированная витая пара с одножильными проводами диаметром 
    0.50 мм широко применяется в процессе сетевых монтажных работ. 
    С ее помощью вы сможете обеспечить развертывание локальной сети 
    в домашних условиях или на предприятии, объединить все 
    необходимое вам оборудование в единую сеть.`,
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
  },
];

const table = document.querySelector('.table');

const createRow = (obj) => {
  const tr = document.createElement('tr');
  tr.classList.add('items');

  let td = document.createElement('td');

  const values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    td = `<td class = "items__item">${values[i]}</td>`;
    tr.insertAdjacentHTML('beforeEnd', td);
  }

  return tr;
};

const renderGoods = (goods) => {
  goods.map((item) => {
    const rows = createRow(item);
    console.log('rows', rows);

    table.prepend(rows);
  });
};

renderGoods(goods);
