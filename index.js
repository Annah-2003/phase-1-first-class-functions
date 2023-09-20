function receivesAFunction(callback) {

callback();
} function myCallback() {
    console.log("Callback function called!");
}
function returnsANamedFunction() {

    function namedFunction() {
        console.log("This is a named function");
    }

    return namedFunction;
}
const myFunction = returnsANamedFunction();
function returnsAnAnonymousFunction() {

    return function () {
        console.log("This is an anonymous function");
    };
} 