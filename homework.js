// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------
// ------------------------------ 1 ------------------------------
/**
 * Пинимает любое количество чисел и возвращать их произведение
 *
 * @param {number} 
 * @return {number} произведение чисел
 */
function multiply() {
  let a = 1;
  for (let i = 0; i < arguments.length; i++) a *= arguments[i];
  if (arguments.length === 0) return 0;
  return a
}

// ------------------------------ 2 ------------------------------
/**
 * Принимает строку и возвращает строку-перевертыш
 *
 * @param {String} string произвольная строка
 * @return {String} string в перевернутом виде
 */
function reverseString(string) {
	let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
    return newString;
}

// ------------------------------ 3 ------------------------------
/**
 * Возвращает строку с замененнм на юникод символом
 *
 * @param {String} str произвольная строка.
 * @return {String} юникод символов строки с пробелами между ними.
 */
function getCodeStringFromText(str) {
	let str2 = '';
    for (let i = 0; i < str.length; i++) {
    	str2 += str.charCodeAt(i) + ' ';
	}
    return str2;
}

// ------------------------------ 4 ------------------------------
/**
 * Функция "Угадай число"
 *
 * @param {number} userGuess Число, введенное пользователем.
 * @return {String} Результат проверки совпадения.
 */
function checkGuess(userGuess) {
	if (userGuess < 0) {
		return 'Ошибка - введите число от 0 до 10';
	} else if (userGuess > 10) {
		return 'Ошибка - введите число от 0 до 10';
	}

	let randomNumber = Math.ceil(Math.random() * 10);
  	if (userGuess !== randomNumber) {
   		console.log(`Вы не угадали ваше число ${userGuess} а выпало число ${randomNumber}`);
 	} else {
  		console.log('Вы выиграли');
  	}
}

// ------------------------------ 5 ------------------------------
/**
 * Принимает число n и возвращает массив, заполненный числами от 1 до n
 *
 * @param {number} n Конечное число массива.
 * @return {Arr} Массив с числами от 1 до n.
 */
function getArray(n) {
	let arr = [];
	 for (let i = 1; i <= n; i++) {
    	arr.push(i);
  }
  return arr;
}

// ------------------------------ 6 ------------------------------
/**
 * Возвращает новый массив с дублированными элементами входного массива
 *
 * @param {Arr} аrr Входной массив с набором чисел.
 * @return {Arr} Массив с дублированными элементами входного массива.
 */
function doubleArray(arr) {
   arr = arr.concat(arr);
   return console.log(arr)
}
doubleArray([1, 2, 3])

// ------------------------------ 7 ------------------------------
/**
 * Удаляет из каждого массива первый элемент
 *
 * @param {arr} arr Входной массив.
 * @return {arr} Массив из оставшихся значений.
 */
function changeCollection(arr) {
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
    arr[i].shift();
  }
  return arr;
}

// ------------------------------ 8 ------------------------------
/**
 * Принимает массив пользователей и выводит искомый массив
 *
 * @param {Аrr} arr Массив пользователей.
 * @param {String} key Параметры массива.
 * @param {String} value Значения параметров массива.
 * @return {Аrr} Искомый массив.
 */
let users = [
	{
		name: 'Denis',
		age: 29,
		gender:'male'
	},
	{
		name: 'Ivan',
		age: 20,
		gender: 'male'
	}
];

function funcGetUsers(arr, key, value) {
	if (!key || !value) {
		return 'Ошибка - введите все параметры';
	}

  	let newArr = [];
 	 for (let i = 0; i < arr.length; i++) {
    if (key in arr[i] && value === arr[i][key]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// ------------------------------ 9 ------------------------------
/**
* Создает строки с результатами обработки данных коллбеком
*
* @param {Аrr} arr Массив.
* @param {callback} Коллбек для обработки массива.
* @returns {String} Сообщение с результатами обработки.
*/
let arr1 = ['my', 'name', 'is', 'Trinity'];
let arr2 = [10, 20, 30];
let arr3 = [
	{
		age: 45,
		name: 'Jhon'
	},
	{
		age: 20,
		name: 'Aaron'
	}
];
let arr4 = ['abc', '123'];

function newValue(arr, callback) {
  return 'New value: ' + callback(arr);
}

function callback1(arr1) {
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		arr += arr1[i][0].toUpperCase() + arr1[i].slice(1) + '';
	    }
	return arr;
}

function callback2(arr2) {
	let arr = [];
	for (let i = 0; i < arr2.length; i++) {
 		arr.push(arr2[i] * 10);
	}
	return arr.join(' ');
}

function callback3(arr3) {
	let arr = [];
	for (let i of arr3) {
		arr.push(`${i.name} is ${i.age}`);
	}
	return arr.join(', ');
}

function callback4(arr4) {
	let arr = [];
    for (let i = 0; i < arr4.length; i++) {
		arr.push(arr4[i].split('').reverse().join(''));
	}
	return arr.join(', ');
}
