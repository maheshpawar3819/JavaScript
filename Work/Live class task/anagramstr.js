// Write a program in js to check if two strings are anagram or not
 
/*
bored, robed
night, thing
arc, car
*/
 
var s1 = "night", s2 = "thing";
 
if(s1.length !== s2.length) {
  console.log("They are not anagram");
}
else {
var count1 = [], count2 = [];
  for(var i=0;i<256;i++) {
    count1[i] = 0;
    count2[i] = 0;
  }
 
  for(var i=0;i<s1.length;i++) {
    var ch1 = s1.charCodeAt(i);
    var ch2 = s2.charCodeAt(i); // 110
    count1[ch1]++;
    count2[ch2]++;
  }
 
  var flag = true;
 
  for(var i=0;i<256;i++){
    if(count1[i] !== count2[i]) {
      console.log("They are not anagrams");
      flag = false;
      break;
    }
  }
 
  if(flag) {
    console.log("They are anagrams");
  }
  debugger;
  
}