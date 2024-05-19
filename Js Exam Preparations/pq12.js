// Create a function to check given string is palindrome or not. Return true if the string is palindrome else return false.A palindrome is a word, phrase, or sequence that reads the same backwards as forwards,
// input : "madam"output : true
// input : "abba"output : true
// input : "hello"output : false


function checkpalendrome(str){
    let rev=str.split('').reverse().join('');
    if(rev===str){
        return true;
    }else{
        return false;
    }
}
console.log(checkpalendrome("madam"));

function isPalindrome(str) {
    // Remove any non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original cleaned string is equal to the reversed string
    return cleanedStr === reversedStr;
  }
  
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("abba"));  // true
  console.log(isPalindrome("hello")); // false
  