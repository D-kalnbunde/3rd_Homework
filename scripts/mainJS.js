console.log('Main JS running');

// This function creates Divs in parent container. In this case in main tag.

function createDivs(selector) {
    const parent = document.querySelector(selector);
    const fizzv = document.querySelector("#fizzval");
    const buzzv = document.querySelector("#buzzval");
    const start = document.querySelector("#start-value");
    const end = document.querySelector("#end-value");

    for (let i = start.value; i <= end.value; i++) {
        const newDiv = document.createElement('div');
        newDiv.id = "myDiv-" + i;
        newDiv.classList.add("alldivs");
        if (i % fizzv.value == 0 && i % buzzv.value == 0) {
            newDiv.classList.add("fizzbuzz");
            newDiv.innerText = "FizzBuzz \n" + i;
        } else if (i % fizzv.value == 0) {
            newDiv.classList.add("fizz");
            newDiv.innerText = "Fizz \n" + i;
        } else if (i % buzzv.value == 0) {
            newDiv.classList.add("buzz");
            newDiv.innerText = "Buzz \n" + i;
        } else {
            newDiv.classList.add("none");
            newDiv.innerText = i;
        }
        parent.appendChild(newDiv);
    }
}

createDivs("main");

// Buttons

const btnRange = document.querySelector(".btn-range");
btnRange.onclick = (event) => {
    removeDivs();
    createRange();
}

const btnFizz = document.querySelector(".btn-fizz");
btnFizz.onclick = (event) => {
    removeDivs();
    createRange();
    removeBuzz();
    removeFizzBuzz();
    removeNone();
}

const btnBuzz = document.querySelector(".btn-buzz");
btnBuzz.onclick = (event) => {
    removeDivs();
    createRange();
    removeFizz();
    removeFizzBuzz();
    removeNone();
}

const btnFizzBuzz = document.querySelector(".btn-fizzbuzz");
btnFizzBuzz.onclick = (event) => {
    removeDivs();
    createRange();
    removeFizz();
    removeBuzz();
    removeNone();
}

const btnReset = document.querySelector(".btn-reset");
btnReset.onclick = (event) => {
    resetAll();
}

// Removes all created Divs

function removeDivs() {
    const parent = document.querySelector("main");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// Removes only Buzz class

function removeBuzz() {

    var container = document.querySelector("main");
    var elements = container.getElementsByClassName("buzz");

    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Removes only Fizz class

function removeFizz() {

    var container = document.querySelector("main");
    var elements = container.getElementsByClassName("fizz");

    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
// Removes only FizzBuzz class

function removeFizzBuzz() {

    var container = document.querySelector("main");
    var elements = container.getElementsByClassName("fizzbuzz");

    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
// Removes only "none" class

function removeNone() {

    var container = document.querySelector("main");
    var elements = container.getElementsByClassName("none");

    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
// Range options - alerts

function createRange() {

    const start = document.querySelector("#start-value");
    const end = document.querySelector("#end-value");

    if (start.value < 1 || end.value < 1) {
        alert("Entered value is below 1! Please select numbers between 1 and 100!")
        resetAll();

    } else if (end.value > 100 || start.value > 100) {
        alert("You went over 100! Please select numbers between 1 and 100!");
        resetAll();

    } else {
        createDivs("main");
    }
}

// Different values

btnVal = document.querySelector(".btn-val");
btnVal.onclick = (event) => {
    removeDivs();
    createDivs("main");

}

//  Resets all

function resetAll() {
    removeDivs();
    document.querySelector("#start-value").value = "1";
    document.querySelector("#end-value").value = "100";
    document.querySelector("#fizzval").value = "3";
    document.querySelector("#buzzval").value = "5";
    createDivs("main");
}

