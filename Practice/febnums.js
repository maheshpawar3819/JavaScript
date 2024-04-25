//print febonacci numbers 

function feb(number){
    let n1=0,n2=1,nextnum;
    for(let i=1;i<=number;i++){
        console.log(n1);
        nextnum=n1+n2;
        n1=n2;
        n2=nextnum;
    }
}
feb(10);