const array = [1, 2, 3, 4, 5];

console.log("Iterating over the array using a for loop:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("\nIterating over the array using forEach method:");
array.forEach(element => {
    console.log(element);
});

console.log("\nIterating over the array using for...of loop:");
for (const element of array) {
    console.log(element);
}
