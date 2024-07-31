//Question : Write a js function to count the occurrences of each element in an array and store the counts in an object. the keys of object should represent the elements of the array, and the values should be represent the number of times each element appears in the array.

/* 
Here what the function should do : 
            -accept the array of numbers as input
            -create empty object store the count of each element
            -Iterate through each number in array
            -for each number increment the count of the object 
            -if the count for the number does not exist yet, initialize it to 1.
            -return the counts object containing the count of each element.

Input : 
        const numbers=[1,2,2,3,1,4,2]
Output : 
        {'1':2,'2':3,'3':1,'4':1}

*/
const numbers=[1,2,2,3,1,4,2,3];
let counts={};

for(let element of numbers){
    counts[element]=(counts[element] || 0)+1
}

console.log(counts)