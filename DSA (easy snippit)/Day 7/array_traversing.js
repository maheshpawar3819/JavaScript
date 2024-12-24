let arr = [1, 3, 5, 2, 8, 7, 4];

// Traverssing
// for (let i = 0; i < arr.length; i++) {
//   document.write(`${i}-${arr[i]} <br>`);
// }

// accessing
// document.write(arr[3]);

function getElement() {
  // alert("function call")
  let el = document.getElementById("element").value;
  //to get element from index no.of array
  //add validation
  if (arr.length <= el) {
    return alert("you are giving greater index number than array length");
  }
  alert(arr[el]);
}
