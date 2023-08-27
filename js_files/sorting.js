
function swap(el1, el2) {
    console.log('In swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

//Disable sorting buttons while sorting and enable it after sorting.
function disableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

//Enable sorting buttons after disabling them
function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

//Disable size slider whilst sorting
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

//Enable size slider when done sorting
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

//Disable New Array button whilst sorting
function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

//Enable New Array button when done sorting
function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}

//Used as async function so that we can show animations of sorting, takes time input in ms (1000ms = 1s)
function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, millisec);
    })
}

//Creating array to store random generated numbers
let array = [];

// Call to display bars when you visit the site.
createNewArray();

function createNewArray(noOfBars = 60) {
    //deleting old bars
    deleteChild();

    //creating an array of random numbers
    array = [];
    for(let i = 0; i < noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");
    // Create multiple element div using loop and adding class bar col
    for(let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//Delete previous bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//Selecting the New Array button to generate a new Array
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    createNewArray(arraySize.value);
});

// <----------------------------------------------------X----x----X---------------------------------------------------->

//Size

let arraySize = document.querySelector("#arr_sz");

//Event listener for size range
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
})

//Speed

//Default input for waitforme (260ms)
let delay = 260;

//Selecting speed range
let delayElement = document.querySelector("#speed_input");

//Event listener to update delay time
delayElement.addEventListener('input', function() {
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
})

