// Question : Number of days between two dates

/*
write a function that calculates the number of days between two dates. the dates will provided in format "yyyy-mm-dd".

*/

const daysbetweendates=(date1,date2)=> {
    let dt1=new Date(date1);
    let dt2=new Date(date2);
    let diff=Math.abs(dt2-dt1);
    return diff/(24*60*60*1000);
}

console.log(daysbetweendates("2024-07-01","2024-07-25"));
console.log(daysbetweendates("2002-07-25","2024-08-14"));