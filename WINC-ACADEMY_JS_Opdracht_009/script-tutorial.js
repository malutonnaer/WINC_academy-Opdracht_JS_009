// Function declaration (classical way of writing a funtion)
function sayHello1() {
    console.log("Hello"); /* body of function */
}

function add(number1, number2) {
    return number1 + number2;
}

add(5, 6);

// Function expression (modern way of wrinting function)
const sayHello2 = function () { /* expression of function is everything after = character. Everything we assign to the name of the function*/
    console.log("Hello 2");
};

const add = function (number1 , number2) {
    return number1 + number2;
};

add(5, 6);



// Arrow function (also a function expression) (hip and new way of writing a function)
const sayHello3 = () => {
    console.log("Hello 3");
};

const add = (number1, number2) => {
    return number1 + number2;
};

add(5, 6);