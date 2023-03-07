// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function users(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = [
    new users(10, 'Roman', 'Dumych', 'roman.dumych96@gmail.com', 938423897),
    new users(9, 'Roman', 'Dumych', 'dumych96@gmail.com', 345345353534),
    new users(3, 'Roman', 'Dumych', 'roman96@gmail.com', 56757567567576),
    new users(4, 'Roman', 'Dumych', '@gmail.com', 345435345345345),
    new users(7, 'Roman', 'Dumych', 'rgrtgrtgrt96@gmail.com', 768678678678678),
    new users(6, 'Roman', 'Dumych', 'fgfghfghfghfh@gmail.com', 456456456456),
    new users(5, 'Roman', 'Dumych', 'ertertertert96@gmail.com', 9384267867863897),
    new users(8, 'Roman', 'Dumych', 'vbbvbcvbfgfgf96@gmail.com', 938425675673897),
    new users(2, 'Roman', 'Dumych', 'ergfdgergdgrreg96@gmail.com', 93842345343897),
    new users(1, 'Roman', 'Dumych', 'efsdgertgfhtrghtr96@gmail.com', 938434544523897),

]
console.log(user)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = user.filter((item) => item.id % 2 === 0)
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = user.sort((a, b) => a.id - b.id)
console.log(sort)

// - Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// - Створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(10, 'Roman', 'Dumych', 'sdfdfgdfgsdf', 342342,
        ['телефон']),
    new Client(8, 'Anton', 'cbfdfg', 'dfgdfgdg', 463535,
        ['ручка', 'олівець', 'блокнот']),
    new Client(9, 'Taras', 'werwer', 'fgdfdfbn', 56756756,
        ['макбук', 'айфон']),
    new Client(7, 'Oleg', 'fdgdf', 'dfgdfg', 213421312,
        ['рюкзак', 'викрутка', 'пила', 'сокира']),
    new Client(5, 'Yura', 'werer', 'ergddfg', 6575675,
        ['стілець', 'стіл', 'ніж', 'дошка', 'продовжувач', 'поличка']),
    new Client(6, 'Olya', 'fhgffg', 'dfgsf', 89797967,
        ['апельсин', 'яблуко', 'груша', 'полуниця', 'вишня']),
    new Client(4, 'Olesya', 'wer', 'fgngnf', 45634543,
        ['пістолет', 'автомат', 'граната', 'кулемет', 'міномет', 'гранатомет']),
    new Client(2, 'Natalia', 'wewre', 'sdfsdf', 45645776,
        ['ліжко', 'шафа', 'тумба']),
    new Client(3, 'Olena', 'sdfsdf', 'dsfdsf', 234234345,
        ['радіоприймач']),
    new Client(1, 'Maria', 'sdfsdf', 'sdfsdf', 76898678768,
        ['вода', 'сік', 'кола', 'фанта']),
]
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorrt = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sorrt)

// -- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function cars(model, producer, year, maxSpeed, engine) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const [key, value] of Object.entries(this)) {
            if (typeof value !== 'function') {
                console.log(`${key}: ${value}`);
            }

        }

    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver
    };
}

const MB = new cars('w211', 'mercedes', 2008, 200, 1.8);

MB.addDriver('Roman')
console.log(MB.driver)

MB.increaseMaxSpeed(300);
console.log(MB.maxSpeed)

MB.changeYear(2010)
console.log(MB.year)

MB.info();
console.log(MB)

// -- (Те саме, тільки через клас)
// -- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = function () {
            for (const [key, value] of Object.entries(this)) {
                if (typeof value !== 'function') {
                    console.log(`${key}: ${value}`);
                }

            }

        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed
        };
        this.changeYear = function (newValue) {
            this.year = newValue
        };
        this.addDriver = function (driver) {
            this.driver = driver
        };
    }
}

const MA = new cars('w211', 'mercedes', 2008, 200, 1.8);

MA.addDriver('Roman')
console.log(MA.driver)

MA.increaseMaxSpeed(300);
console.log(MA.maxSpeed)

MA.changeYear(2010)
console.log(MA.year)

MA.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize,) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let mass = [
    new Cinderella('Liana', 18, 35),
    new Cinderella('Diana', 20, 34),
    new Cinderella('Oksana', 21, 34),
    new Cinderella('Maria', 20, 36),
    new Cinderella('Natalia', 22, 32),
    new Cinderella('Rozalia', 19, 34),
    new Cinderella('Marianna', 20, 33),
    new Cinderella('Uliana', 18, 37),
    new Cinderella('Anastasia', 21, 35),
    new Cinderella('Olesya', 22, 36),
]
console.log(mass)

//     Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prience = new Prince('Roman', 26, 33);

for (const prienceElement of mass) {
    if (prienceElement.footSize === prience.shoe) {
        console.log(prienceElement)
    }
}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку