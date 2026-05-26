//No-1
let fruits = ["papaya", "guava", "orange"];
console.log(fruits)

//No-2
let arr = ["coconut", "papaya", "banana"];
console.log(arr[0])

//No-3
let fruit = ["coconut", "papaya", "banana"];
fruit.push("kiwi");
console.log(fruit)


//No-4
let fu = ["coconut", "papaya", "banana"];
fruit.pop();
console.log(fu)

//No-5
let Arr = ["coconut", "papaya", "banana", "watermelon"];
console.log(Arr.length)

//No-6
let array = ["coconut", "papaya", "banana", "watermelon"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//No-7
let numbers = [10, 50, 20, 80, 30];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum number is " + max);


//No-8
let num = [100, 50, 20, 80, 30];

let min = num[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i];
    }
}

console.log("Minimum number is " + min);

//No-9
const no = [20, 60, 9, 7, 11];
let sum = no.reduce(myFun);
function myFun(total, value) {
    return total + value;
}
console.log("the total number is = " + sum)


//No-10
let A = ["coconut", "papaya", "banana", "watermelon"];
A.reverse();
console.log(A)


//No-11
function getName(person) {
    return person.name;
}
let person = {
    name: "Sae Ro",
    age: 24,
}
console.log(person.name)


//No-12
const cart = [{ name: "Book", price: 1000 }, { name: "Pen", price: 500 }, { name: "Bag", price: 2000 }];
function cartTotal(cart) {
    let total = 0;

    for (let x of cart) {
        total += x.price;
    }
    return total;

}
console.log("The Total cart is " + cartTotal(cart));


//No-13
function updateAge(Person, newAge) {
    Person.age = newAge;
    return Person;
}
let Person = {
    name: "Mg Mg",
    age: 20
};
console.log(updateAge(Person, 36))


//No-14
function average(arr) {
    let Sum = 0;

    for (let no of arr) {
        Sum += no;

    }
    return Sum / arr.length;
}
let x = [10, 80, 60, 90, 4];
console.log("Average is " + average(x))


//No-15
function multiArray(arr, num) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * num)
    }
    return result;

}
let y = [1, 5, 8, 9]
console.log(multiArray(y, 7))

//NO-16
function countVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;

}
let str = "Bonjour Lady"
console.log(countVowels(str))


//No-17
function login(username, password) {
    if (username === "admin" && password === 12345) {
        return true;
    } else {
        return false;
    }
} console.log(login("admin", 12345))


//No-18
function squareArray(arr) {
    return arr.map(function (num) {
        return num * num;
    });
}
console.log(squareArray([6, 8, 11, 4, 9]));


//No-19
let stu = {
    name: "Su Myat",
    age: 24,
    city: "SGG"
}
for (let key in stu) {
    console.log(key + ":" + stu[key]);
}


//No-20
let students = [
    {
        name: "Aung Aung",
        age: 20,
        grade: "A"
    },
    {
        name: "Su Su",
        age: 19,
        grade: "B+"
    },
    {
        name: "Sae Ro",
        age: 21,
        grade: "A+"
    }
];
console.log(students);


//No-21
let student = [
    {
        name: "Sar U",
        age: 16,
        city: "Shwe Bo"
    }
]
console.log(student[0].name)


//NO-22
function findMaxAge(users) {
    let max = users[0].age;
    for (let i = 1; i < users.length; i++) {
        if (users[i].age > max) {
            max = users[i].age;
        }
    }
    return max;
}
const users = [{
    name: "Aung Aung",
    age: 60
},
{
    name: "Mg Mg",
    age: 30
},
{
    name: "Su Su",
    age: 99
}];
console.log(findMaxAge(users));


//No-23
function toggleStatus(todo) {
    todo.isCompleted = !todo.isCompleted;

    return todo;
}
const task = {
    title: "Learn JavaScript",
    isCompleted: false
};

console.log(toggleStatus(task));


//No-24
function isEqual(obj1,obj2){
    if(obj1.name === obj2.name && obj1.age === obj2.age){
        return true;
    }else{
        return false;
    }
}
const obj1=  { name: "Aung Aung", age: 25 }; 
const obj2 = { name: "Aung Aung", age: 6 };
console.log(isEqual(obj1,obj2))


//No-25
function rotateLeft(arr){
    let firstItem = arr.shift();
    arr.push(firstItem);

    return arr;

}
 const number = [1, 2, 3, 4, 5];
 console.log(rotateLeft(number));