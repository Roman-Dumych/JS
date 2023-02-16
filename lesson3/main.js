// - За допомогою циклу for і document.write(), вивести 10 блоків div c довільним текстом всередині.
for (let i = 0; i < 10; i++) {
    document.write('<div>Hello</div>');

}

// - За допомогою циклу for і document.write(), вивести 10 блоків div c довільним текстом і індексом всередині.
for (let i = 0; i < 10; i++) {
    document.write(`<div> Hello ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let a = 0;
while (a < 20) {
    document.write('<h2>Hello World</h2>');
    a++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while (b < 20) {
    document.write(`<h1>Hello World ${b}</h1>`);
    b++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу, побудувати структуру по шаблону.
// - Масив:
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')

for (let listOfItem of listOfItems) {

    document.write(`<li> ${listOfItem}</li>`)
}

document.write('</ul>')

// - Замість 'ITEM OF ARRAY' підставити елемент з масиву, щоб получився цілий список з даними з масиву.
// - Використовуючи данні з масиву, за допомоги document.write та циклу
//   побудувати структуру по шаблону  Зробити адекватну стилізацію.
// - Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div>
<h2>${product.title}</h2>
<img src="${product.image}" alt="">
<p>${product.price} UAH</p>

</div>`)

}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - За допомоги циклу вивести користувачів зі статусом true:
for (const user of users) {
    if (user.status)
        document.write(`${user.name}`);
    document.write(' ')
}

// - Користувачів зі статусом false:
for (const user of users) {
    if (!user.status)
        document.write(`${user.name}`);
    document.write(' ')
}

// - Користувачів які старші за 30 років:
for (const user of users) {
    if (user.age > 30)
        document.write(`${user.name}`);
    document.write(' ')
}
