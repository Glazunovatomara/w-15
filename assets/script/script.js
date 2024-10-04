
//Создайте пустой массив с именем numbers
let numbers = [];
//Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let num = -10; num<=10; num++) {
    numbers.push(num);
    //Удалите все отрицательные числа из массива
    if (num<0) {
        numbers.splice(num);
    };
}
console.log(numbers)
//Возведите каждое число в квадрат
for(let number of numbers) {
    numbers[number] = numbers[number]**2;
}
console.log(numbers)

//Отсортируйте числа в порядке убывания
for (let i = numbers.length-1; i >= 0; i--) {
    numbers.push(numbers[i]);
}
numbers.splice(0,11)
//Выведите полученный массив numbers в консоль
console.log(numbers)
