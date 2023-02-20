// - Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б:

let square = (a, b) => a * b

document.write(square(20, 40));

// - Створити функцію яка обчислює та повертає площу кола з радіусом r:

let squareCircle = (a) => a * a * 3.14

document.write(squareCircle(5));

// - Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r:

let squar = (h, r) => 2 * 3.14 * r * (h + r);

document.write(squar(5, 2));

// - Створити функцію яка приймає масив та виводить кожен його елемент:

let printArray = (a) => {
    for (let i = 0; i < a.length; i++) {
        const aElement = a[i];
        console.log(aElement)
    }
}

printArray([5, 2, true]);

// - Створити функцію яка створює параграф з текстом. Текст задати через аргумент:

let f = (text) => {
    const paragraph = `<p>${text}</p>`
    document.write(paragraph)
}

f('abc')

// - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий:

let printList = (text) => {
    let list = `<ul>
 <li>${text}</li>
 <li>${text}</li>
 <li>${text}</li>
 </ul>`
    document.write(list)
}

printList('Hello')

// - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл):

let pList = (text, count) => {
    let items = ''
    for (let i = 0; i < count; i++) {
        let a = `<li>${text}</li>`
        items = items + a;
    }
    let list = `<ul>${items}</ul>`
    document.write(list)
}

pList('Hello', 10)

// - Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список:

let listCreator = (arr) => {
    document.write('<ul>')
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('</ul>')
}

listCreator([true, 1, 2, 3, 4, 5]);

// - Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок:

let objectCreator = (objects) => {
    for (const object of objects) {
        document.write(`<div>${object.id} ${object.name} ${object.age}</div>`)
    }
}

// - Створити функцію яка повертає найменьше число з масиву:

let minNumber = (numbers) => {
    let value = numbers[0];
    for (const number of numbers) {
        if (value > number) {
            value = number
        }
    }
    return value;
}
console.log(minNumber([10, 5, 7, 9]))

// - Створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let massNumbers = 0;
    for (let arrElement of arr) {
        massNumbers = massNumbers + arrElement;
    }
    return massNumbers;
}
console.log(sum([1, 2, 10]))
// - Створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах:
//   Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let a = arr[index1]
    let b = arr[index2]

    arr[index1] = b;
    arr[index2] = a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//   Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    for (const nameCurrency of currencyValues) {
        if (nameCurrency.currency === exchangeCurrency)
            return sumUAH / nameCurrency.value
    }

}

console.log(
    exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')
)
