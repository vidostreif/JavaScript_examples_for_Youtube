// Переменная – это «именованное хранилище» для данных.

// 1 Объявление переменных let

// 1.1 Объявление с последующим присвоением
// let message
// message = 'Hello'
// console.log(message)



// 1.2 Объявляем и сразу присваиваем значение
// let message = 'Hello'
// console.log(message)



// 1.3 Несколько объявлений за раз
// let user = 'John', age = 25, message = 'Hello'



// 1.4 Тоже самое, но более удобно
// let user = 'John'
// let age = 25
// let message = 'Hello'



// 1.5 Можно совместить подходы
// let user = 'John',
//   age = 25,
//   message = 'Hello'




// 2 Имена переменных:
// Имя переменной должно содержать только буквы, цифры или символы $ и _
// Первый символ не должен быть цифрой

// 2.1 Допустимые имена
// let userName // верблюжья нотация
// let user_name
// let test123

// let $name
// let _name

// let $ = 'переменная с именем $'
// let _ = 'переменная с именем _'

// console.log($)
// console.log(_)



// 2.2 Можно использовать любой другой язык, но не стоит
// Пишите ясные и понятные имена переменных
// let имя = 'переменная с именем имя'
// let 我 = 'переменная с именем 我'

// console.log(имя)
// console.log(我)



// 2.3 Неправильные имена
// let 5a // не может начинаться с цифры
// let my+names // плюс '+' не разрешён в имени



// 2.4 Зарезервированные имена
// let let // ошибка!
// let return // ошибка!



// 2.5 Регистр имеет значение
// let message = 'message_1'
// let Message = 'message_2'
// let MESSAGE = 'message_3'
// let mesSage = 'message_4'

// console.log(message)
// console.log(Message)
// console.log(MESSAGE)
// console.log(mesSage)



// 2.6 Работает без "use strict" - строгого режима (современного режима), может повлечь изменение глобальных переменных
// num = 7
// console.log(num)




// 3 можно измененять значение уже созданной let переменной

// 3.1 Присваиваем новые значения let
// let message = 'Hello'
// console.log(message)

// message = 'world'
// console.log(message)

// message = '!'
// console.log(message)



// 3.2 Присваиваем значение одной переменной другой
// let hello = 'Hello!'
// let world  = 'World!'

// console.log(hello)
// console.log(world)

// world = hello

// console.log(hello)
// console.log(world)



// 3.3 отсутствие строгой типизации
// let message = 'Hello'
// console.log(message)

// message = 1
// console.log(message)

// message = null
// console.log(message)

// message = {}
// console.log(message)




// 4 Особенности использования var 
// Область видимости переменных var ограничивается либо функцией, либо, если переменная глобальная, то скриптом. Такие переменные доступны за пределами блока. (ECMAScript 6)

// 4.1 Очень похожи, при первом взгляде
// var messageVar = 'Hello from var'
// console.log(messageVar)

// let messageLet = 'Hello from let'
// console.log(messageLet)



// var доступна за пределами блока, let - нет

// 4.2 var доступна за пределами if
// if (true) {
//   var testVar = true // используем var вместо let
// }

// console.log(testVar)



// 4.3 var доступна за пределами for
// for (var iteratorVar = 0; iteratorVar < 10; iteratorVar++) {
//   // ...
// }

// console.log(iteratorVar)



// 4.4 let не доступна за пределами if и других блочных конструкций
// if (true) {
//   let testLet = true
// }

// console.log(testLet)



// 4.5 Если блок кода находится внутри функции, то var, как и let, становится локальной переменной в этой функции
// function sayHello() {
//   if (true) {
//     var messageVar = "Hello from var"
//   }

//   console.log(messageVar) // срабатывает и выводит текст
// }

// sayHello()

// console.log(messageVar) // ошибка



// Всплытие. var можно объявить после использования, let - нет

// 4.6 Работает
// messageVar = 'Hello from var'
// console.log(messageVar)
// var messageVar



// 4.7 И даже так работает, если мы не используем "use strict"
// "use strict"
// messageVar = 'Hello from var'
// console.log(messageVar)



// 4.8 Так не хочет
// messageLet = 'Hello from let'
// console.log(messageLet)
// let messageLet



// 4.9 Объявления var всплывают, присваивания значений – нет.
// console.log(messageVar)
// var messageVar = 'Hello from var'



// var допускает повторное объявление в пределах одного блока, let - нет

// 4.10 Это работает
// var messageVar = 'Hello from var'
// console.log(messageVar)

// var messageVar
// console.log(messageVar)



// 4.11 Это не работает
// let messageLet = 'Hello from let'
// console.log(messageLet)

// let messageLet
// console.log(messageLet)



// 4.12 Так можно, но не нужно
// let messageLet = 'Hello from let 1'
// console.log(messageLet)

// if (true) {
//   let messageLet  = 'Hello from let 2'
//   console.log(messageLet)
// }

// console.log(messageLet)





// 5 Константы - const
// Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить. 

// 5.1 Объявляем и сразу присваиваем значание 
// const myBirthplace = 'Пугачёв'
// console.log(myBirthplace)



// 5.2 Так как, присвоить значение потом нельзя
// const myBirthplace
// myBirthplace = 'Пугачёв'
// console.log(myBirthplace)



// 5.3 И поменять значение так же нельзя, если оно примитивное
// const myBirthplace = 'Пугачёв'

// myBirthplace = 'Сызрань' // ошибка



// 5.4 Если не примитивное, то его можно модифицировать
// const obj = {a: 5}
// obj.a = 10

// console.log(obj)


// 5.5 Но ссылку на новый объект присвоить нельзя
// const obj = {a: 5}

// obj = {a: 10} // ошибка


// 5.6 Константы в верхнем регистре. Данные известные до исполнения программы.
// const API_DOMAIN_NAME = "yandex.ru"
// const API_PORT = 4400

// console.log(API_DOMAIN_NAME + ':' + API_PORT)

// //Но
// const startTime = new Date()
// console.log(startTime)



// В остальном const ведуть себя так же как и let

// 5.7 Их так же, нельзя использовать до объявления
// console.log(messageConst)
// const messageConst = 'Hello from const'



// 5.8 И они имеют блочную облать видимости
// if (true) {
//   const testConst = true
// }

// console.log(testConst)



// 5.9 Не уверен, что использовать? Используй const и не поскупись на количество
// const messageHello = 'Hello from const'
// const myBirthplace = 'Пугачёв'
// const startTime = new Date()
// let success = true
// let errorTime = new Date()


















// тестовые задания

// Задание 1: Что выведет console.log? Или будет ошибка?
// let condition = 1

// if (true) {
//   condition = 2
// }

// console.log(condition)




// Задание 2: Что выведет console.log? Или будет ошибка?
// let condition = 1

// if (true) {
//   let condition = 2
// }

// console.log(condition)




// Задание 3: Что выведет console.log? Или будет ошибка?
// let condition = 1

// if (true) {
//   const condition = 2
// }

// console.log(condition)




// Задание 4: Что выведет console.log? Или будет ошибка?
// let condition = 1

// if (false) {
//   let condition = 2
//   console.log(condition)
// } else {
//   let condition = 3
//   console.log(condition)
// }

// console.log(condition)




// Задание 5: Что выведет console.log? Или будет ошибка?
// const condition = 1

// function changeCondition() {
//   condition = 2
// }

// changeCondition()

// console.log(condition)




// Задание 6: Что выведет console.log? Или будет ошибка?
// var condition = 1

// function changeCondition() {
//   var condition = 2
// }

// changeCondition()

// console.log(condition)




// Задание 7: Что выведет console.log? Или будет ошибка? А что если let поменять на var? 

// function changeCondition() {
//   condition = 2
// }

// {
//   let condition = 1

//   changeCondition()

//   console.log(condition)
// }

// console.log(condition)