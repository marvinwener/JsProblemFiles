/* No out-of-bounds protection */
function arrayOutOfBounds (array, index) {
    return array[index];
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var myFruit = fruits[5];