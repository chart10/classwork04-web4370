// Christian Hart 001-68-3628

// Part 1 - Problem 1 - Generate Fibonacci Numbers
function fibonacci(num) {
    if (num <= 0) { return 0; }
    if (num == 1) { return 1; }
    return fibonacci(num-2) + fibonacci(num-1);
}
function fibCount(n) {
    fibString = "";
    for (let i = 0; i < n; i++) {
        fibString = fibString + " " + fibonacci(i);
    }
    console.log(fibString);
    return fibString;
}
function problem1(value) {
    document.getElementById("demo1").innerHTML = fibCount(value);
}

// Part 1 - Problem 2 - Build a Triangle out of Asterisks
function triangleStarBuilder(rows) {
    triStarString = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = i; j > 0; j--) {
            triStarString = triStarString + "*";
        }
        triStarString = triStarString + "\n";
    }
    return triStarString;
}
function problem2(value) {
    document.getElementById("demo2").innerHTML = triangleStarBuilder(value);
}

// Part 1 - Problem 3 - Sort an Array
arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

arr2 = arr1.sort();
function problem3(arr1) {
    arr2 = arr1.sort();
    arr2String = "[ ";
    for (x in arr2) {
        if (x == arr2.length - 1) {
            arr2String = arr2String + arr2[x] + " ";
        }
        else {
        arr2String = arr2String + arr2[x] + ", ";
        }
    }
    arr2String = arr2String + "]";
    
    document.getElementById('demo3').innerHTML = arr2String;
}

// Part 1 - Problem 4 - Search most frequent in an Array
arr4 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function arrayMode(array) {
    currentCount = 0;
    mostFrequent = 1;
    let mode;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                currentCount++;
            }
            if (currentCount < mostFrequent) {
                mostFrequent = currentCount;
                mode = array[i]
            }
        }
        currentCount = 0;
    }
    // console.log(mode);
    document.getElementById('demo4').innerHTML = mode;
}

// Part 1 - Problem 5 - Shuffle an Array
function shuffle(array) {
    let temp;
    for (x in array) {
        rand = Math.floor(Math.random() * x);
        temp = array[x];
        array[x] = array[rand];
        array[rand] = temp;
    }
    arrShuffleString = "[ ";
    for (x in array) {
        if (x == array.length - 1) {
            arrShuffleString = arrShuffleString + array[x] + " ";
        } else {
            arrShuffleString = arrShuffleString + array[x] + ", ";
        }
    }
    arrShuffleString = arrShuffleString + "]";
    document.getElementById('demo5').innerHTML = arrShuffleString;
}

// Part 1 - Problem 6 - Edit CSS Properties
function colors(bgColor,txtColor) {
    var obj = document.getElementById('container');
    obj.style.backgroundColor = bgColor;
    obj.style.color = txtColor;
}
function reset() {
    var obj = document.getElementById('container');
    obj.style.backgroundColor = "white";
    obj.style.color = "black";
}

// Part 2 - Problem 1 - Divide Array into Even and Odd
evenOddArr = [];

function arrayBuilder(num){
    evenOddArr.push(num);
    evenOddString = "[ ";
    for (x in evenOddArr) {
        if (x == evenOddArr.length - 1) {
            evenOddString = evenOddString + evenOddArr[x] + " ";
        } else {
        evenOddString = evenOddString + evenOddArr[x] + ", ";
        }
    }
    evenOddString = evenOddString + "]";
    document.getElementById('demo7').innerHTML = evenOddString;
}

function divideArray(array) {
    let evenArr = [];
    let oddArr = [];
    for (x in array) {
        if (array[x] % 2 == 0) {
            evenArr.push(array[x]);
        } else {
            oddArr.push(array[x]);
        }
    }
    evenArr.sort(function(a, b){return a-b});
    oddArr.sort(function(a, b){return a-b});
    evenString = "[ ";
    oddString = "[ ";
    for (x in evenArr) {
        if (x == evenArr.length - 1) {
            evenString = evenString + evenArr[x] + " ";
        } else {
        evenString = evenString + evenArr[x] + ", ";
        }
    }
    evenString = evenString + "]";
    for (x in oddArr) {
        if (x == oddArr.length - 1) {
            oddString = oddString + oddArr[x] + " ";
        } else {
        oddString = oddString + oddArr[x] + ", ";
        }
    }
    oddString = oddString + "]";
    document.getElementById('demoEven').innerHTML = "Even numbers: " + evenString;
    document.getElementById('demoOdd').innerHTML = "Odd numbers: " + oddString;
}

// Part 2 - Problem 2 - Number Guessing Game
let answer = Math.floor(Math.random() * 100) + 1;
let guesses = 0;
console.log("answer = " + answer);
function playGuessingGame(guess) {
    guesses++;
    console.log(guess);
    if (guesses >= 10) {
        document.getElementById('demo8').innerHTML = "Incorrect again! You've " + 
        "used up all 10 tries.";
    } else if (guess == answer) {
        document.getElementById('demo8').innerHTML = "You got it! " + guess + 
        " was right! You got the answer in " + guesses + " tries."
    } else if (guess < answer) {
        document.getElementById('demo8').innerHTML = "That's not it. " +
        "Your guess is too low! Guesses so far: " + guesses;
    } else if (guess > answer) {
        document.getElementById('demo8').innerHTML = "That's not it. " +
        "Your guess is too high! Guesses so far: " + guesses;
    }
}
