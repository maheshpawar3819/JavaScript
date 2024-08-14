// Question : Calculate the age from birth date

/*
Create a funtion that takes birthdate as an input and returns the current age of the person. The birthdate will provide in the format "yyyy-mm-dd";


Requirements :
            -The function must handle leap years and varying numbers of the days in each month accurately
            -consider timezone diffrence and ensure the age is calculated based on the current date in your local timezone 
            -The output should be age in whole years.
*/

 const calculateAge=(birthdate) => {
    let todaydate=new Date();
    birthdate=new Date(birthdate);

    let age=todaydate.getFullYear() -birthdate.getFullYear();
    // console.log(age)

    let monthDiff=todaydate.getMonth() - birthdate.getMonth();
    // console.log(monthDiff);

    if(monthDiff<0 || monthDiff===0 && todaydate.getDate() <birthdate.getDate()){
        age--
    }
    return age;
 }

 console.log(calculateAge("2002-07-25"));
 console.log(calculateAge("1972-05-06"));