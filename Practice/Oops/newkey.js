function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function() {
    console.log(`hii my name is : ${this.name}`);
}

let p1=new Person("mahi",23);
let p2=new Person("gauri",25);
let p3=new Person("sneha",25);
let p4=new Person("mahesh",22);

let array=[p1,p2,p3,p4];
console.log(array);

array.map((ele) => {
    return console.log(ele.talk());
})



