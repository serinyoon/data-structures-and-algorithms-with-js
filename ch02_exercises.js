// 1. Create a grades object that stores a set of student 
// grades in an object. Provide a function for adding a grade 
// and a function for displaying the student’s grade average.

function Grades() {
    var grades = [];

    this.addGrade = function(grade) {
        grades.push(grade);
    };

    this.printAvg = function() {
        var sum = 0;
        var avg = 0;

        for(var i = 0; i < grades.length; i++) {
            sum += grades[i];
        }

        avg = sum / grades.length;
        console.log("grade avg: " + avg);
    };
}

// 2. Store a set of words in an array and display the 
// contents both forward and backward.
function Foo() {
    var words = [];

    this.addWord = function(word) {
        words.push(word);
    };

    this.printForward = function() {
        console.log("forward: ");
        for(var i = 0; i < words.length; i++) {
            console.log("\t" + words[i]);
        }
    };

    this.printBackward = function() {
        console.log("backward: ");
        for(var i = words.length - 1; i >= 0; i--) {
            console.log("\t" + words[i]);
        }
    };
}

// 3. Modify the weeklyTemps object in the chapter so that 
// it stores a month’s worth of data using a two-dimensional array. 
// Create functions to display the monthly average, a specific 
// week’s average, and all the weeks’ averages.

function MonthTemps() { 
    this.dataStore = (function() {    // is there a better way to init 2d array?
        var arr = []
        for(var i = 0; i < 5; i++) {
            arr.push([0,0,0,0,0,0,0]);
        }
        return arr;
    })();
    this.max = 31; 
    this.cursor = 0;

    this.init = 

    this.getRow = function(index) {
        return parseInt(index / this.dataStore[0].length);
    };

    this.getCol = function(index) {
        return index % this.dataStore[0].length;
    };

    this.add = function(temp) {
        if(this.cursor < this.max) {
            var row = this.getRow(this.cursor);
            var col = this.getCol(this.cursor);
            this.dataStore[row][col] = temp;
        }
        this.cursor++;
    };

    this.tempAt = function(index) {
        var row = this.getRow(index-1);
        var col = this.getCol(index-1);

        return this.dataStore[row][col];
    };

    this.getWeekAvg = function(week) {
        var week = this.dataStore[week-1];
        var sum = week.reduce(function(acc, curr){
            return acc + curr;
        });
        return sum / week.length;
    };

    this.printWeekAvg = function(week) {
        var avg = this.getWeekAvg(week);
        console.log('week ' + week + ' avg: ' + avg);
    };

    this.printWeekAvgAll = function() {
        for(var i = 0; i < this.dataStore.length; i++) {
            this.printWeekAvg(i+1);
        }
    };
}


// 4. Create an object that stores individual letters in an array 
// and has a function for displaying the letters as a single word.

function toArray(str) {
    return str.split('');
}

function printWord(arr) {
    console.log(arr.join(''));
}

var str = "hello";
var arr = toArray(str);
printWord(arr);
