// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------
// ---------------------------- !1! ------------------------------
/**
 * Пинимает любое количество чисел и возвращать их произведение
 *
 * @return {number}
 * @return {number} произведение чисел
 */
function multiply() {
	if (!arguments.length === 0) {return 0;}

	let a = 1;
	
  for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'number') {
			a *= arguments[i];
		}
	}
  return a;
}

// ----------------------------- !2! -----------------------------
/**
 * Принимает строку и возвращает строку-перевертыш
 *
 * @param {String} string произвольная строка
 * @return {String} string в перевернутом виде
 */
function reverseString(string) {
		return string.split('').reverse().join('');
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

// ---------------------------- 5 --------------------------------
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

// ---------------------------- !6! ------------------------------
/**
 * Возвращает новый массив с дублированными элементами входного массива
 *
 * @param {Arr} аrr Входной массив с набором чисел.
 * @return {Arr} Массив с дублированными элементами входного массива.
 */
function doubleArray(arr) {
	return arr.concat(arr);
}

// ------------------------------ !7! ----------------------------
/**
 * Удаляет из каждого массива первый элемент
 *
 * @param {arr} arr Входной массив.
 * @return {arr} newArr Массив из оставшихся значений.
 */
function changeCollection() {
	let newArr = [];

	for (let i = 0; i < arguments.length; i++) {
		newArr.push(arguments[i].slice(1));
	}
	return newArr;
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

// ------------------------------ !9! -----------------------------
/**
* Создает строки с результатами обработки данных коллбеком
*
* @param {Аrr} arr Массив.
* @param {callback} Коллбек для обработки массива.
* @returns {String} Сообщение с результатами обработки.
*/
 function newValue(arr, callback) {
	 if (!Array.isArray(arr)) return console.log('error');
	 
	 let res = "New value: ";

	 for (let i = 0; i < arr.length; i++) {
		res += callback(arr[i]);
	 }
	 return res;
	}

let newRes1 = newValue(['my', 'name', 'is', 'Trinity'], function (item) {
	return item[0].toUpperCase() + item.slice(1);
});

let newRes2 = newValue([10, 20, 30], function (item) {
	return item * 10 + ', ';

});

let newRes3 = newValue([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], function (item) {
	return (`${item.name} is ${item.age}, `);
});

let newRes4 = newValue(['abc', '123'], function (item) {
	// return arr[i].split('').reverse().join('');
	return item.split('').reverse().join('') + ', ';
});