// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

let country = ["India", "America", "Shrilanka", "Itly", "Caneda"];

function longname(country) {
  let ansidx = 0;
  for (let i = 0; i < country.length; i++) {
    let anslen = country[ansidx].length;
    let currlen = country[i].length;
    if (currlen > anslen) {
      ansidx = i;
    }
  }
  console.log(country[ansidx]);
}
longname(country);
