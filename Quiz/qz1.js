function sum(nums){
    var result=0;

    for(var i=0;i<=nums.length;i++){
        result +=nums[i];
    }
    return result;
}

var numbers=[1,2,3,4,5];
console.log(`result : ${sum(numbers)}`); //ans==> NaN