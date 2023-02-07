// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(users);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    {title: 1, pageCount: 100, genre: 'comedy'},
    {title: 2, pageCount: 200, genre: 'horror'},
    {title: 3, pageCount: 300, genre: 'drama'},
];
console.log(books);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 =
{
         genre: 'comedy',
         authors: [
             {
                 name: 'Roman',
                 age: 26,
             },
         ],
     };
console.log(book1);

let book2 =
    {
        title: 1,
        pageCount: 200,
        genre: 'horror',
        authors: [
            {
                name: 'Roman',
                age: 26,
            },
        ],
    };
console.log(book2);

let book3 =
    {
        title: 1,
        pageCount: 300,
        genre: 'drama',
        authors: [
            {
                name: 'Roman',
                age: 26,
            },
        ],
    };
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let mass = [
    {name: 'Roman', username: 'Roman', password: 1111},
    {name: 'Roman', username: 'Roman', password: 2222},
    {name: 'Roman', username: 'Roman', password: 3333},
    {name: 'Roman', username: 'Roman', password: 4444},
    {name: 'Roman', username: 'Roman', password: 5555},
    {name: 'Roman', username: 'Roman', password: 6666},
    {name: 'Roman', username: 'Roman', password: 7777},
    {name: 'Roman', username: 'Roman', password: 8888},
    {name: 'Roman', username: 'Roman', password: 9999},
    {name: 'Roman', username: 'Roman', password: 1010},
];
console.log(mass[0].password);
console.log(mass[1].password);
console.log(mass[2].password);
console.log(mass[3].password);
console.log(mass[4].password);
console.log(mass[5].password);
console.log(mass[6].password);
console.log(mass[7].password);
console.log(mass[8].password);
console.log(mass[9].password);


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// - Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//  (в першу, другу, третю или четверту частину години).
let time = 45;
if (time <= 15) {
    console.log(1)
} else if (time > 15 && time <= 30) {
    console.log(2)
} else if (time > 30 && time <= 45) {
    console.log(3)
} else if (time > 45 && time <= 60) {
    console.log(4)
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
day = 19;
if (day <= 10) {
    console.log(1)
} else if (day > 10 && day <= 20) {
    console.log(2)
} else if (day > 20 && day <= 31) {
    console.log(3)
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
day = prompt('enter day');

switch (day) {
    case '1':
        console.log('Monday');
        break;

    case '2':
        console.log('Tuesday');
        break;

    case '3':
        console.log('Wednesday');
        break;

    case '4':
        console.log('Thursday');
        break;

    case '5':
        console.log('Friday');
        break;

    case '6':
        console.log('Saturday');
        break;

    case '7':
        console.log('Sunday');
        break;

    default:
        console.log()
}


// - Користувач вводить або має два числа.
// - Потрібно знайти та вивести максимальне число з тих двох .
// - Також потрібно врахувати коли введені рівні числа.
let a = 2;
let b = 2;

if (a>b){
    console.log(a)
} else if (b>a){
    console.log(b)
} else if (b===a){
    console.log('!?!?!?')
}


// - Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// - За допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
x = '';
x = x || 'default';
console.log(x)


// - З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}

