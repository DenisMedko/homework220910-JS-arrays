// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log('Task 1');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log('Task 2');
const arr4 = [1, 2, 3];
console.log(arr4.reverse());

// 3.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log('Task 3');
const arr5 = [1, 2, 3];
console.log(arr5.push(4, 5, 6));

// 4.  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
console.log('Task 4');
const arr6 = [1, 2, 3];
console.log(arr6.unshift(4, 5, 6));

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
console.log('Task 5');
const arr7 = ['js', 'css', 'jq'];
console.log(arr7.shift());

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
console.log('Task 6');
const arr8 = ['js', 'css', 'jq'];
console.log(arr8.pop());

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log('Task 7');
const arr9 = [1, 2, 3, 4, 5];
const arr10 = arr9.slice(0, 3);
console.log(arr10);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
console.log('Task 8');
const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.slice(-2);
console.log(arr12);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log('Task 9');
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 2)
console.log(arr13);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
console.log('Task 10');
const arr14 = [1, 2, 3, 4, 5];
const arr15 = arr14.splice(1, 3);
console.log(arr15);

// 11.  Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('Task 11');
const arr16 = [1, 2, 3, 4, 5];
arr16.splice(3, 0, 'a', 'b', 'c');
console.log(arr16);

// 12. Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('Task 12');
const arr17 = [1, 2, 3, 4, 5];
arr17.splice(1, 0, 'a', 'b');
arr17.splice(-1, 0, 'c');
// еще вариант
//arr17.splice(arr17.length - 1, 0, 'c');
arr17.splice(arr17.length, 0, 'e');
console.log(arr17);

// 13.  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log('Task 13');
const compareFunction = function (a, b) {a - b};
const arr18 = [3, 4, 1, 2, 7];
console.log(arr18.sort(compareFunction));

// 14. Дан массив со следующими объектами внутри:  					
// {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			
// {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
// {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
// {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',} 		
// Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) 
// является (пол) и ему сейчас (возраст) лет”
console.log('Task 14');
const objArr = [
    {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			
    {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
    {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
    {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',} 	
];

objArr.forEach(function func(element) {
    return console.log(`Пользователь ${element.firstName} ${element.lastName} 
        является ${element.gender} и ему сейчас ${element.age} лет`)       
});
//более короткий вариант
objArr.forEach(element => console.log(`Пользователь ${element.firstName} ${element.lastName} 
        является ${element.gender} и ему сейчас ${element.age} лет`)       
);

// 15. Дан массив со следующими объектами внутри:
// {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			
// {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
// {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
// {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',} 		  					
// Создайте новый массив на основании старого массива, 
// добавив каждому пользователю в новом массиве свойство telephoneNumber 
// которое может быть или строкой или числом (на ваше усмотрение).
console.log('Task 15');
const objArr1 = [ //1, 2, 3, 4
    {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			
    {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
    {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
    {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',} 	
];

const newArr = objArr1.map(function func(element, index) {
    //Нужно создавать новый элемент, чтоб не мутировать исходный
    return {
        firstName: element['firstName'], 
        lastName: element['lastName'], 
        age: element['age'], 
        gender: element['gender'],
        phoneNumber: 380680000000 + index,
    };
});
console.log(newArr);
console.log(objArr1);

//Вариант 2 десериализация/сериализация
let clonedArr = JSON.parse(JSON.stringify(objArr1));
const newArr2 = clonedArr.map(function func(element, index) {
    element.phoneNumber =  380680000000 + index
    return element;
});
console.log(objArr1);
console.log(newArr2);


// 16. Дан массив со следующими объектами внутри:  					
// {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}, 			
// {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
// {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
// {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},		
// {firstName: 'Undefined', lastName: 'Undefinovich', age: 99},			
// {firstName: 'Null', lastName: 'Nullovich', gender: 'male'}				
// Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.
console.log('Task 16');
const objArr2 = [
    {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}, 			
    {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
    {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
    {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},		
    {firstName: 'Undefined', lastName: 'Undefinovich', age: 99},			
    {firstName: 'Null', lastName: 'Nullovich', gender: 'male'}	
];	
const sortedArr = objArr2.filter(function func(element) {
    return element.gender === 'male' && element.age >= 18;   
}
);
//Вариант 2 сокращенная запись
const sortedArr2 = objArr2.filter(element => element.gender === 'male' && element.age >= 18);
console.log(objArr2);
console.log(sortedArr);
console.log(sortedArr2);

// 17. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. 
//Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
console.log('Task 17');
const arr19 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
const flatedArr = arr19.flat(3);
console.log(flatedArr);