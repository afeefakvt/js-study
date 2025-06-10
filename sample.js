// var a= document.getElementById("head1");
// a.innerHTML="learn js";
// a.style.color="blue";

// var a=document.getElementsByClassName("head2");
// a[0].style.color="red";



// var a=document.getElementsByTagName("p");
// a[0].innerHTML="lolol"

// var a=document.getElementsByName("text")[0];
// var b=document.getElementById("head");

// function message(){
//    b.innerHTML= "hello" +a.value;

// }
// var a=document.querySelectorAll(".head1");
// a[1].innerHTML="c++"
// var heading=



// getname();
// console.log(x);
// var x=7;

// function getname(){
//     console.log("namaste");
// }

// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }


// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// console.log("start");
// function cb(){
//     console.log("callback");
// }
// setTimeout(cb,0);
// console.log("end");


// let price=200;
// let name="afeefa";


// let a=5;
// let b=2;
// console.log("a==b",a==b);



// const name=prompt("enter your name");
// console.log("you entered the name: ",name);




// let num;
// prompt("enter a number");
// if(num%2===0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }

// let score=35;
// let grade;
// if(score>=90&&score<=100){
//     grade="A";
// }else if(score>=80&&score<=89) {
//     grade="B";
// }else if(score>=70&&score<=79){
//     grade="C";
// }else{
//     grade="F";
// }
// console.log("your grade is ",grade);


// for(var i=1;i<=5;i++){
//     console.log(i);
// }
// console.log(i);

// let gameNum=24;
// let usrNum=100;
// if(gameNum!=usrNum){
//     prompt("")
// }


// let fullName=prompt("enter your fullname");
// let userName="@"+fullName+fullName.length;
// console.log(userName);

// let num=prompt("enter a number");
// console.log("entered number is ",num);


// let num1=parseInt(prompt("enter an int number"));
// let num2=parseFloat(prompt("enter a float number"));
// let sum=parseFloat(num1+num2);
// console.log(sum);


// let marks=[5,5,5];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// let avg=sum/marks.length;
// console.log(avg);


// let price=[250,645,300,900,50];
// for(let i=0;i<price.length;i++){
//     let offer=price[i]/10;
//     price[i]-=offer;
// }
// console.log(price);


// const arrowSum= (a,b) => {
//     console.log(a+b);
// }
// arrowSum(5,5);


//mapp//
// const arr=[1,2,3,4,5];
// function double(x){
//     return x*2;
// }
// const output=arr.map(double);
// console.log(output);

//filter//
// const arr=[1,2,3,4,5];



// const output=arr.filter(function isOdd(x){
//     return x%2;});
// console.log(output);

// const arr=[1,2,3,4,5];



// const output=arr.filter((x)=> x%2);
// console.log(output);

//reduce//
// const arr=[1,2,3,4,5];
// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(output);

// const arr=[1,2,3,4,5];
// const output=arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//         return acc;
//     }
// },0);
// console.log(output);



//second largest
// const arr = [1,2,3,4]

// const a = arr.reduce((acc,curr)=>{
//     if(curr>acc.largest){
//         acc.secondLargest = acc.largest
//         acc.largest = curr
//     }else if(curr<acc.largest && curr>acc.secondlargest){
//         acc.secondLargest = curr
//     }
//     return acc
// },{largest:-Infinity,secondLargest:-Infinity})

// console.log(a)


//second smallest even using reduce

// const arr = [1,2,3,5,6,7,8]
// const a = arr.reduce((acc,curr)=>{
//     if(curr%2==0 && curr<acc.smallest){
//         acc.secondSmallest  = acc.smallest
//         acc.smallest = curr
//     }else if(curr%2==0 && curr>acc.smallest && curr<acc.secondSmallest){
//         acc.secondSmallest = curr
//     }
//     return acc
    
// },{smallest:Infinity,secondSmallest:Infinity})

// console.log(a)

// //third Largest
// const arr = [1,2,3,4,9,0 ]

// let largest = -Infinity
// let secondLargest = -Infinity
// let thirdLargest = -Infinity

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         thirdLargest = secondLargest
//         secondLargest = largest
//         largest = arr[i]
//     }else if(arr[i]<largest && arr[i]>secondLargest && arr[i]>thirdLargest){
//         thirdLargest = secondLargest
//         secondLargest = arr[i]
//     }else if(arr[i]<largest && arr[i]<secondLargest && arr[i]>thirdLargest){
//         thirdLargest = arr[i]
//     }
// }
// console.log(largest,secondLargest,thirdLargest)


//promise//
// let p=new Promise((resolve,reject)=>{
//     let a=1+1;
//     if(a==3){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// })
// p.then((result)=>{
//     console.log(result);
// }).catch((message)=>{
//     console.log("this is in the catch"+message);
// })


//async await
//  function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weatherdata");
//             resolve(200);
//         },4000);
//     });
//  }

// async function getAllData(){   
//     await api();
// }
// getAllData()

//async awiait
// function fetchdata(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('data fetched')
//         },2000)
//     })
// }
// async function fetchandlog(){
//     console.log('dta fetching....')
//     const data = await fetchdata()
//     console.log(data)
// }
// fetchandlog()



// function a(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a>b){
//             resolve("success")
//         }else{
//             reject("failed")
//         }
//     })
// }
// async function b(){
//     try{
//         let c=await a(1,3)
//         console.log(c)
//     }catch(error){
//         console.log(error)
//     }
// }
// b()



// const a=['apple','appppppp','oram'];

// const b=a.reduce((acc,curr)=>{
//     if(curr<acc){
//         acc.length=curr.length
//         return acc.length;
//     }
// })
// console.log(b);


// var a;
// console.log(a);

// var a=10;
// function b(){
//     var x=15;
// }
// console.log(a);



//scope chain,scope and lexical environment

// function a(){
//     let bee="afeefa";
//     function b(){
//         function c(){
//               console.log(bee);
//         }c();
// }
// b();
// }
// a()



// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();


//variable shadowing
// var a=10;

// {
//     var a=100;
//     let b=20;
//     const c=30;
//     console.log(a);
// }

// console.log(a);

//ILLEGAL SHADOWING
// let a=20;
// {
//     var a =20;

// }

// legal shadowing
// var a=20;
// {
//     let a=20;

// }


// let a=10;
// {
//     let a=20;
// }


//closuere

// function x(){
//     var a=2;
//     function y(){
//         console.log(a);

//     }
//     y();
// }
// x();

//settimeout and closure
// function x(){
//     var i=1;
//     setTimeout(()=>{
//         console.log(i)
//     },3000);
//     console.log("hello")

// }
// x();



//double parenthesis

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a)
//     }
//     return inner;
// }
// outer()()


// function outer(){
  
//     function inner(){
//         console.log(a)
//     }
//     var a=10;
//     return inner;
// }
// outer()()

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     let a=10;
//     return inner;
// }
// const close=outer()
// close();

// function outer(b){
//     function inner(){
//         console.log(a,b)
//     }
//     let a=10;
//     return inner;
 
// }
// const close=outer("helloworld");
// close();


// function outest(){
//     var c=10;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         let a=1;
//         return inner;
//     }
//     return outer;
// }
// const close=outest()("hello");
// close();




//anonymous function
// let myfunction=function (){
//     console.log('hello');

// }
// myfunction();


//function expression
// b();
// let b=function a(){
//     console.log('a called');

// }

//  const b=function a(x, y) {
//     console.log(x+y);
// };
// b(2,3)


//callback function

// function x(){
//     console.log("kello");
// }

// x(function y(){

// });


//callback function

// function hello(name,callback){
//     console.log(name)
//     callback()
// }
// function greet(){
//     console.log('khhhyyy')
// }
// hello('afeefa',greet)



//ternary operator
// let age=5;
// let result = (age>=6)?"adult":"not adult";
// console.log(result);


// let stri="name"
// console.log(stri.length);


// let str = "afeefAAAA"; 
// str=str.toLowerCase(); 
// console.log(str); 
 


//slice
// let str = "afeefAAAA";
// let sstr=str.slice(1,6); 
// console.log(sstr);

//concat
// let str="afeefa";
// let strr="kvt";
// let strrr=str.concat(strr);
// console.log(strrr);

//replace
// let str="afeefa";
// str=str.replace("f","l");
// console.log(str);


// let str="afeefa";
// console.log(str.replace("a","b"));

// let str="afeefa";
// str=str.replace(/f/g,"l");
// console.log(str);


//push
// const a=[1,2,3,4,];
// a.push(5);
// console.log(a);

//pop
// const a=[1,2,3,4];
// a.pop();
// console.log(a);

//tostring
// let arr = [1, 2, 3, 4];
// let str = arr.toString();
// console.log(str);
// console.log(typeof str) // Output: "1,2,3,4"



//concat
// let a=[1,2,3,4];
// let b=[6,7,8]
// let c=a.concat(b);
// console.log(c);

//shift
// let a=[1,2,3,4];
// a.shift();
// console.log(a);

//unshift
// let a=[1,2,3,4]
// a.unshift(0);
// console.log(a);


//slice
// let a=[1,2,3,4];
// console.log(a.slice(1,3));


//splice//delete and add and repalce1
// let a=[1,2,3,4,5];
// a.splice(2,0,0);//add in btw
// console.log(a);


  // let a=[1,2,3,4,5];
  // a.splice(4,1,7);//replace
  // console.log(a);

// let a=[1,2,3,4,5];
// a.splice(1,1);//delete
// console.log(a);


//sum
// function a(x,y){
//      const sum=x+y;
//     return sum;
// }

// console.log(a(2,3));

//sum using arrow function
// const arrowsum=(a,b)=>{
//     console.log(a+b)
// }
// arrowsum(2,1);


// const a=function b(x,y){
//     console.log(x+y);

// }
// a(1,2);

//charat
// let str='afeefa'
// console.log(str.charAt(1));


//array to string

//const a =[12.3,5]
// let b=a.toString()
// console.log(typeof(b));

//sum using promise
// function add(x,y){
//     return new Promise((resolve,reject)=>{
//         let sum=x+y;
//         resolve(sum);
//     })
// }
// add(3,3).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })


//sum
// const p=new Promise((resolve,reject)=>{
//     let a=1;
//     let b=1;
//     resolve(a+b);
// })
// p.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error);
// })

//even or odd
// const p=new Promise((resolve,reject)=>{
//     let a=8;
//     if(a%2==0){
//         resolve(`${a} is even`)
//     }else{
//         reject(`${a} is odd`)
//     }
// })
// p.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//promise.all
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise2 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })

// Promise.all([promise1,promise2,promise3])
// .then((result)=>{
//     console.log("all fnished" +result);
// }).catch((error)=>{
//     console.log(error);
// })


//promise.allsettled
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise2 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })
// Promise.allSettled([promise1,promise2,promise3])
// .then((result)=>{
//     console.log("all finished" +result);
// }).catch((error)=>{
//     console.log("noe error" +error)
// })



//promise.race
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise2 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })
// Promise.race([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })


//promise.any
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);     
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })

// Promise.any([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })



// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("suceess")
//     },1000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },1000)
// })

// const promise3 = new Promise((resolve,reject)=>{
//     let a=1
//     if(a==2){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// Promise.all([promise1,promise2,promise3])
// .then((result)=>{
//     console.log("all finisehd",result)
    
// }).catch((error)=>{
//     console.log(error)
// })



 //array destructuring
//  const arr=[1,2,3,4]
//  const [a,b,c,d]=arr;
//  console.log(a);
//  console.log(b);
//  console.log(c);


//   const arr=[1,2,3,4,5,6,7,8]
//  const [a,b,...rest]=arr;
//  console.log(a);
//  console.log(b);
//  console.log(rest);


//object destructuring
// const obj={
//     name:"affeaf",
//     age:20
// }
// const {name,age} = obj
// console.log(name);
// console.log(age);


//nested desturcturing
// const obj={
//     name:"afeefa",
//     age:20,
//     adress:{
//         city:"usa",
//         country:"india"

//     }
// }
// const {name,age,adress:{city,country}} = obj
// console.log(name)
// console.log(country);


//memoization

// const memo = {}

// function sum(num)  {
//     if(memo[num]){
//         return memo[num]
//     }
//     memo[num] = num*num
//     return memo[num]
    
// }

// console.log(sum(3))
// console.log(sum(3))



//CURRYING//
//  function a(x,y){
//     return x+y;
//  }
//  function b(x){
//     return function(y){
//         return x+y;
//     }
//  }
//  const c=b(2);
//  console.log(c(3));

//pure function
// function add(a, b) {
//     console.log(a+b);
//   }
//   add(4,5);


//making it impure
// let x=1
// function sum(y){
//     x=2
//     return x+y
// }
// console.log(sum(2))
// console.log(sum(2))


//generator function
// function* generatorFunction() {
//     yield 'First value';
//     yield 'Second value';
//     yield 'Third value';
// }

// const generator = generatorFunction();

// console.log(generator.next()); // { value: 'First value', done: false }
// console.log(generator.next()); // { value: 'Second value', done: false }
// console.log(generator.next()); // { value: 'Third value', done: false }
// console.log(generator.next()); // { value: undefined, done: true }


//factory function
// function factory(name,age){  
//     return{
//         name:name,
//         age:age,
//         greet:function(){
//             console.log(`hi iam ${this.name}`);
//         }
//     }
// }
// const person1=factory("affefa",20);
// const person2=factory("fida",9);


// person1.greet()
// person2.greet()


//iife
// (function (){
//     var x=10;
//     console.log('inside iife:'+x)
// })();


// console.log(x);//this will will throw an error coz x is not accessible outside


//object.freeze
// const obj={
//     name:"afeefa",
//     age:30
// }
// Object.freeze(obj);

// obj.name="affff";
// delete obj.age;

// console.log(obj.name);
// console.log(obj.age);



//object.seal
// const obj={
//      name:"afeefa",
//          age:30
//      }
//      Object.seal(obj);   
    
//      obj.name="affff";
//      delete obj.age;
    
//      console.log(obj.name);
//      console.log(obj.age);

//shallow copy
// Shallow copy example
// const original = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'gaming']
// };

// const shallowCopy = Object.assign({}, original); // Using Object.assign()

// original.hobbies.push('writing'); // Modifying the original object

// console.log(original);      // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming', 'writing' ] }
// console.log(shallowCopy);   // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming', 'writing' ] }


//deep copy
// Deep copy example using JSON serialization and parsing
// const original = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'gaming']
// };

// const deepCopy = JSON.parse(JSON.stringify(original)); // Using JSON serialization and parsing

// original.hobbies.push('writing'); // Modifying the original object

// console.log(original);      // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming', 'writing' ] }
// console.log(deepCopy);      // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming' ] }


//map
// const arr=["af","fff"];
// const output=arr.map(element=>element.toUpperCase());
// console.log(output);



// const a=["aff","afffff"]
// const b= a.map((num)=>{
//    return num.toUpperCase()
// })
// console.log(b);



//largest value in onbject
// const obj={
//     a:1,
//     b:2
// }
// let l1=Object.values(obj)[0];
// for(const key in obj){
//     if(l1<obj[key]){
//         l1=obj[key];
//     }
// }
// console.log(l1)


//object sum
// const obj={
//     a:6,
//     b:2
// }
// let sum=0;
// for(const key in obj){
//     sum=sum+obj[key];
// }
// console.log(sum);

//second largest value in onj

// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// let l1=Object.values(obj)[0];
// let l2=Object.values(obj)[1];
// for(const key in obj){
//     if(l1<obj[key]){
//         l2=l1
//         l1=obj[key]
  
//     }else if(obj[key]<l1&&obj[key]>l2){
//         l2=obj[key]
//     }
// }
// console.log("largest:",l1);
// console.log("second largest:",l2)


//remove object key
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// delete obj.b;
// console.log(obj)



//sort and revrese an array

// const a=[1,11,8,4]
// const b=a.sort((a,b)=>(b-a)).reverse()

// console.log(b)



 //sum using generator function

//  function*a(){
//     let sum=0
//     while(true){
//         b=yield sum;
//         sum=sum+b;
//     }
// }
// const ab=a();
// ab.next().value
// console.log(ab.next(1).value)
// console.log(ab.next(2).value)
// console.log(ab.next(3).value)


//optional chaining
// const obj={
//     name:"afeefa",
//     address:{
//         city:"india"

//     }
// }
// console.log(obj.address?.city);

//method chaining

// const myname = "afeefa"
// const name = myname.toUpperCase().slice(1).replace(/E/g,"j") //to change all E's
// console.log(name)

// const a = [
//     { type: 'revenue', amount: 100, currency: 'USD' },
//     { type: 'expense', amount: 50, currency: 'EUR' },
//     { type: 'revenue', amount: 120, currency: 'USD' },
//     { type: 'revenue', amount: 80, currency: 'EUR' },
//     { type: 'expense', amount: 30, currency: 'USD' },
//     { type: 'expense', amount: 25, currency: 'USD' },
//     { type: 'revenue', amount: 200, currency: 'EUR' },
//     { type: 'expense', amount: 40, currency: 'EUR' },  
//     { type: 'revenue', amount: 150, currency: 'USD' }
//   ];
// let sum=0
// a.forEach((val)=>{
//     sum=sum+val.amount
// })

// console.log(sum);

//PRINT EVEN NUMBERS UNLIMITED
// function*a(){
//     let num=1
//     while(true){
        
//     if (num%2==0){
//         yield num;

//     }
//     num++;
// }
// }
// const b=a();
// while(true){
//     console.log(b.next().value);//set interval will not work in while loop
// }

// const a=[1,2,3]
// a.splice(0)
// console.log(a)


//empty array
// const a=[]
// a.push(1,2,3,4)
// console.log(a)


//PRINT EVEN NUMBERS USUNG GF UNLIMITEDLY
// function*a(){
//     let num=1
//     while(true){
        
//     if (num%2==0){
//         yield num;

//     }
//     num++;
// }
// }
// const b=a();
// function c(){
//     console.log(b.next().value);
// }
// setInterval(c,1000);//set interval will not work in while loop




// const a="hello world"
// const b=a.split(" ").reverse().join(" ");
// console.log(b);



// const a="this is a word" 
// const b=a.split(' ').map((e)=>e.split('').reverse().join(' ')).join(' ');
// console.log(b)


// const a=3456
// const b=String(a);
// const d=b.split("");
// let sum=0;
// const c=d.forEach((num)=>{
//     sum=sum+Number(num);
// })
// console.log(sum)




// const a={
//     key1:123,
//     key2:3456,
//     key3:099
// }
// let num=0
// let akey=""

// for(const key in a){
//     if(a[key]>num){

//     num=a[key]
//     akey=key
//     }

// }
// console.log(akey,num)

//rest
// function a(...rest){
//     return rest.reduce((acc,curr)=>{
//        return acc=acc+curr
        
//     },0)

// }

// console.log (a(2,3,4,4,5));//to give myltiple arguments to function


//trim
// const a="   afeeffa  ";
// console.log(a.trim())

// const a=["apple","orange","pineapple","avocado"]
// const b=a.map((x)=>{
//     return x.charAt(0).toUpperCase()+x.slice(1)
// })



// console.log(b)


//sum of even nmubers using reduce
// const a=[1,2,3,4,5];
// const b=a.reduce((acc,curr)=>{
//     if(curr%2==0){
//         return acc=acc+curr
//     }else{
//         return acc
//     }
// },0);
// console.log(b)


//another method
// const a = [1,2,3,4,5]

// const b = a.reduce((acc,curr)=>{
//     if(curr%2==0){
//         acc = acc+curr
//     }
//     return acc
// },0)
// console.log(b)



//multiplication of two array


// const a=[1,2,3]
// const b=[4,5,6]
// const ab=a.map((num1,num2)=>{
//     return num1*b[num2]
    
// })
// console.log(ab)



// const a = [1,2,3]
// const b=[4,5,6]

// let c=[]
// for(let i=0;i<a.length;i++){
//     for(let j=i;j<b.length;j++){
//         c.push(a[i]*b[j])
//         break;
//     }
// }
// console.log(c)




// let a=10
// let b=20
// let c=30

// const ab=a>b?a:b
// const abc=ab>c?ab:c
// console.log(abc)

//set
// const a=[1,1,1,2,2,2,2,3,4,4]
// const b=new Set(a);
// console.log(b)
// console.log(b.size)
// console.log(b.add(7))
// console.log(b.has(8))
// console.log(b.delete(2))


// const a=[1,2,3,4,5,7]
// const b=a[0]+a[a.length-1]
// console.log(b)

// const a=[1,2,3,4]
// a.splice(a.length-1,1);
// console.log(a)


// const a=[1,2,3,4,5,5,5,5,5,5,5,5]
// let target=3
// let count=0
// for(let i=0;i<a.length;i++){
//     if(a[i]==target){
//         count++
//     }
// }
// console.log(count)


//remove nth ele from arry
// function a(arr,n){
//     arr.splice(n,1)
//     return arr
// }
// const ab=[1,2,3,4]
// const n=2
// console.log(a(ab,n))

//largest string in an arry
// const a=["aff","afffffff"]
// const b=a.reduce((acc,curr)=>{
//     if(curr.length>acc.length){
//         acc=curr
//         return acc
//     }
// })
// console.log(b)


// const a =['aff','afffff','dvs']
// let l1 = ''
// a.forEach((val)=>{
//     if(val.length>l1.length){
//         l1=val
//     }
// })
// console.log(l1)


//unique numbers using filter
// const a=[1,2,3,3,4,4,5,5,6]
// const b=a.filter((num1,num2)=>{
//     if(a[num1]!=a[num2]){
//         return num1
    
//     }
// })
// console.log(b)



//even numbers usinfg filter
// const a=[1,2,3,4,5,6,7,8]
// const b=a.filter((x)=>{
//     if(x%2==0){
//         return x
//     }
// })
// console.log(b)




// const obj={
//     a:1,
//     b:2,
//     c:3,
//     d:0
    
// }
// let akey=""
// let l1=0
// for(const key in obj){
//     if(obj[key]>l1){
//         l1=obj[key]
//         akey=key
//     }
// }
// console.log(akey,l1)




//print unique using loop
// function a(ab){
// for(let i=0;i<a.length;i++){
//     for( let j=1;j<a.length;j++){
//         if(a[i]!=a[j]){
//             return a[i]
//         }
//     }
// }
// }

// const ab=[1,2,3,3,3,4,5]/////////doubt
// console.log(a(ab))


//remove multiple of 3
// const a=[1,2,3,4,5,6]
// for(let i=0;i<a.length;i++){
//     if(a[i]%3==0){
//         for(let j=i;j<a.length;j++){
//             a[j]=a[j+1]
//         }
//         i--
//         a.length--
//     }
// }
// console.log(a)



//sort object
// const obj={
//     age1:30,
//     age2:65,
//     age3:4
// }
// const b=Object.sort(obj)((a,b)=>a.age-b.age);
// console.log(b)


//sort by alphabetical order
// let a="hello and the between"  
// a=a.split(" ").sort().join(" ")
// console.log(a)

// const a=["hello world"]
// console.log(a[0].split(" ")[1])



// function a(x){

//     for(let i=1;i<=10;i++){
//         console.log(i + "x" + x + "=" + i*x) 
//     }
    
// }
// console.log(a(2))////doubt


// function multiply(num){
//     for(let i=1;i<=10;i++){
//         console.log(`${num} x ${i} = ${num*i}`);
        
//     }
// }
// multiply(5)




// const a=[1,2,3,4,5]
// let temp=a[0]
// a[0]=a[a.length-1]
// a[a.length-1]=temp
// console.log(a)


// const a="malayalam" 
// const b=a.split("").map((x)=>{
//     if(x=="a"){
//         return "e"
//     }else{
//         return x
//     }
    
// })
// console.log(b.join(""))


// const a=[1,2,3]
// const b=[2,4,6]

// const c=a.concat(b)
// for(let i=0;i<c.length;i++){
//     for(let j=i+1;j<c.length;j++){
//         if(c[i]>c[j]){
//             let temp=c[i]
//             c[i]=c[j]
//             c[j]=temp
//                 }
//     }
// }

// console.log(c)


// const a=[["a",2],["b",5]]
// const obj={}
// a.map((x)=>{
//     obj[x[0]]=x[1]
// })
// console.log(obj)



// const a=[["a",2],["b",5]]
// let obj={}

// for(let num of a){
//     obj[num[0]]=num[1]
// }
// console.log(obj)



//flat
// const a=[[1,2],[3,4]]
// const b=a.flat()
// console.log(b)

// //flatmap
// const a=[1,2,3,4,5,6]
// const b=a.flatMap((val)=>{
//    return [val*2,val+2]
// })
// console.log(b)


// const a=[[1,2],[3,4]]
// const b=a.flatMap((x)=>{
//     return [x[0]*2,x[1]*2]
// })
// console.log(b)


// for(let i=1;i<=5;i++){
//     let str=""
//     for(let j=1;j<=5;j++){
//         if(i===1||i===5||j===5-i){
//             str+="*"
//         }else{
//             str+=""
//         }
//     }
//     console.log(str)
// }


// const obj={
//     a:1,
//     b:2
// }
// delete obj.a
// console.log(obj)



//factorial
// let count=1 
// for(i=1;i<=5;i++){
//     count=count*i

// }
// console.log(count)


//bitwise
// const a=3
// const b=5
// console.log(a&b)


//aplimdrome with loop
//  let str="afesfffa"
//  let isPalindrome=true

//  let leftIndex=0
//  let rightIndex=str.length-1

//  for(i=0;i<str.length/2;i++){
//     if(str[leftIndex]!=str[rightIndex]){
//         isPalindrome=false
  //          break;
        
//     }
//     leftIndex++
//     rightIndex--

//  }
//  if(isPalindrome){
//     console.log("palindrome")
//  }else{
//     console.log("not pallindrome")
//  }


// function ispalindrome(str){

// if(str==str.split("").reverse().join("")){
//     console.log("ispalllindrome")
// }else{
//     console.log("not pallindrome")
// }
// }
// ispalindrome("hsa")



//while
// let i=1
// while(i<=5){
//     console.log(i)
//     i++;
// }


//do while
// let i=1;
// do{
//     console.log(i)
//     i++
// }while(i<=5)


//pass by value
// function a(x){
//     x=10
//     console.log(x)
    
// }
// let num=5
// a(num)
// console.log(num)

//pass y refrence
// function a(person){
//     person.name="bob"
//     console.log(person)

// }
// let obj={

//     name:"alice"
// }
// a(obj)
// console.log(obj)



// reverse
// // const a=[1,2,3,4,5]
// // let i=0
// // let j=0
// // for( i=0,j=a.length-1;i<=a.length/2;i++,j--){
// //     let temp=a[i]
// //     a[i]=a[j]
// //     a[j]=temp
    
// // }
// // console.log(a)
   

//prime
// const a=[1,2,3,4,5]

//  for(let i=0; i<a.length; i++){
//     let flag=0
//     for(let j=1;j<=a[i];j++){
//         if(a[i]%j==0){
//             flag=1
//         }
//         }
//         if(flag==0){
//             console.log(a[i])
//         }

//         }


// function prime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<=n/2;i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(9))



// function prime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(9))


//unique using loop
// const a=[1,2,3,3,4,5]
// for(let i=0;i<=a.length-1;i++){
//     let flag=0

//     for(let j=i+1;j<=a.length-1;j++){
//         if(a[i]==a[j]){
//             flag=1

//         }
//     }
//     if(flag==0){
//         console.log(a[i])
//     }
// }


//delete object key
// const a={
//     key1:1,
//     key2:2
// }
// delete a.key1
// console.log(a)



//array is empty or not
// const a=[1,2,3]
// if(a.length==0){
//     console.log("empty")
// }else{
//     console.log("not empty")
// }

//object
// const obj={
//     a:1,
//     b:2
// }
// if(Object.entries(obj)==0){
//     console.log("emoty")
// }else{
//     console.log("not empty")
// }


//remove adjacent odd elements from array
// const a=[1,2,3,9,4,5]

// for(let i=0;i<a.length;i++){
//     if(a[i]%2==1&&a[i+1]%2==1){
//         a.splice(i,2)
//     }
// }
// console.log(a)


//print z pattern

// print even numbers of array using map
// const a=[1,2,3,4,5,6,7]
// const b=[]

// const c=a.map((x)=>{
//     if(x%2){
//         b.push(x)
//     }
// })
// console.log(b)


//revrese
// const a=[1,2,3,4,5]
// for(i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }



// var a
// console.log(a)


// const obj={a:[1,2,3,4,5]}
// let result=obj.a.reduce((acc,curr)=>acc+curr,0)
// console.log(result)

// const arr=[{a:2,b:3},{a:3,b:4},{a:4,b:5}]
// let a=0
// let b=0
// for(let i=0;i<arr.length;i++){
//     a=a+arr[i].a
//     b=b+arr[i].b
// }
// console.log("a=",+a)
// console.log("b=",+b)



// let str="razik"
// str=str.toLowerCase()
// let count=0
// let vowels="aeiou"
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//     count++
//     }
// }
// console.log(count)



// let a="     affeeefa   "
// console.log(a.trim());

//pass by value pass by reference

// function a(x){
//     x=0
//     console.log(x)

// }
// let num=5
// a(num);
// console.log(num)


// function a(obj){
//     obj.name="bob"
//     console.log(obj.name)
// }
// let person={name:"alice"}
// a(person);
// console.log(person.name)


//call apply bind

// const person={
//     name:"afeefa"
// }

// function greet(name){
//     console.log(`hi ${name},this is ${this.name}`)
// }
// greet.call(person,"alice")


// function greet(name){
//     console.log(`hi ${name},this is ${this.name}`)
// }
// const person={
//     name:"john"
// }
// greet.apply(person,["alice"])

//  function greet(name){
//     console.log(`hi ${name},this is ${this.name}`)
// }
// const person={
//     name:"afeefa"
// }
// const bind=greet.bind(person)
// bind("alice")


// let a=[1,2,3,4,5]
// for(let i=0;i<a.length;i++){
//     a[i]%2?console.log(a[i]):null
// }

// let a=[1,2,4,5,6]
// for(let i=0;i<a.length;i++){
//     console.log()
// }

// let a=[1,2,3,4,5]
// let result=a.filter(num=>!(num%2==0))
// console.log(result)


// // const y=null
// // const z="hii"

// const result=y??
// console.log(result)

// const res=z??
// console.log(z)


//explicit
// let str = '123';
// let num = Number(str);
// console.log(num); // Output: 123
// console.log(typeof num); // Output: number


//implicit
// let z="12"-3
// console.log(z)


// const a=[1,2,3]
// return a.push(4)
// console.log(a)


// const a=[1,2,2,3,4,5]
// const b=a.filter((num1,num2)=>{
//     if(a[num1]!=a[num2]){
//         return num1
//     }
// })
// console.log(b)



// var name = 'razik'
// console.log(name)




const ab = [{af:[4,34,343]},{af:[4,34,343]},{af:[4,34,343]},{af:[4,34,343]}]

for(let i=0;i<ab.length;i++){
     ab[i].af=ab[i].af.reduce((acc,curr)=>{
         acc=acc+curr
         return acc
     },0)
}
console.log(ab)



// const ab = [{af:[4,34,343]},{af:[4,34,343]},{af:[4,34,343]},{af:[4,34,343]}]

// for(let i=0;i<ab.length;i++){
//     let sum=ab[i].af.reduce((acc,curr)=>{
//          acc=acc+curr
//          return acc
//      },0)
//      ab[i].af=[sum]
// }
// console.log(ab)



// let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// // ouutput - [1, 4, 7, 2, 5, 8, 3, 6, 9]
// const res = []
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         res.push(arr[j][i])
//     }
// }
// console.log(res)'


// let a=[
//     {
//     "productId": 1,
//     "reviews": [
//     {
//     "rating": 4,
//     "reviewText": "Great product!"
//     },
//     {
//     "rating": 5,
//     "reviewText": "Excellent product!"
//     }
//     ]
//     },
//     {
//     "productId": 2,
//     "reviews": [
//     {
//     "rating": 3,
//     "reviewText": "Good product!"
//     },
//     {
//     "rating": 4,
//     "reviewText": "Great product!"
//     }
//     ]
//     },{
//     "productId": 3,
//     "reviews": [
//     {
//     "rating": 5,
//     "reviewText": "Excellent product!"
//     },
//     {
//     "rating": 4,
//     "reviewText": "Great product!"
//     }
//     ]
//     }
//     ]    
    
//     let arr=[]
//     let sum=0
//     let avg=0
//     for(let i=0;i<a.length;i++){
//         sum=0
//         avg=0
//         for(let j=0;j<a[i].reviews.length;j++){
//             sum+=a[i].reviews[j].rating
//         }
//                 avg+=sum/a[i].reviews.length
//                 arr.push(avg)
    
//     }
    
//     console.log(arr)
    



// let arr=[[{a:[1,1,1]}],[{b:[1,1,1]}],[{c:[1,1,1]}]]


// let sum=0
// for(let i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//        for(const key in arr[i][j]){
//            for(let k=0;k<arr[i][j][key].length;k++){
//                sum+=arr[i][j][key][k]
//            }
//        }
        
//     }
// }
// console.log(sum)




//second largest odd
// let nums = [1, 2, 5, 7, 3, 9, 12, 32, 43, 51];

// let a = nums.reduce((acc,curr)=>{
//     if(curr%2==1&& curr>acc.largest){
//         acc.secondlargest = acc.largest
//         acc.largest  =curr
        
//     }else if(curr%2==1&& curr>acc.secondlargest && curr<acc.largest){
//         acc.secondLargest = curr
//     }
//     return acc
    
// },{largest:0,secondlargest:0})

// console.log(a)


//insert 3,4 after 2
// let arr = [1, 2, 5, 7];
//  arr.splice(2,0,3,4)
// console.log(arr)




//find second least occurence with hashmap
// let arr=[1,1,1,3,3,,3,3,3,3,3,4,4,1,1,1,2,2]

// let obj = {}

// for(const num of arr){
//     if(obj[num]){
//         obj[num]++
//     }else{
//         obj[num]=1
//     }
    
// }
// let d = Object.values(obj).sort((a,b)=>a-b)
// let f = [...new Set(d)]
// let g = f[1]

// for(const key in obj){
//     if(obj[key]==g){
//         console.log(Number(key))
//     }
// }



//delete last value of obj
// let obj = {
//     a:1,
//     b:2,c:3

// }
// let a = Object.keys(obj)
// let last = a[a.length-1]

// delete obj[last]
// console.log(obj);




// let obj = {
//     a:1,b:5,c:3
// }
// let a = Object.values(obj).sort((a,b)=>a-b)

// console.log(a)




//symbol in object
// const id= Symbol('id')

// const obj = {
//     name:'afeefa',
//     [id]:1235
// }
// console.log(obj);
// console.log(obj[id]);


// const sym = Symbol('hidden')

// const obj = {
//     name:'affefa',
//     [sym]:'i am hidend'
// }
// let a= Object.keys(obj)
// console.log(a);
// let b= Object.getOwnPropertySymbols(obj)
// console.log(b);


//Object.assign
// const obj = {
//     a:1,
//     b:3
// }
// const obj2 = {
//     b:2
// }


// const a = Object.assign(obj2,obj)
// console.log(a);
// console.log(a===obj2);


// for(let i=10;i>=1;i--){
//    setTimeout(()=>{
//        console.log(i)
       
//    },(11-i)*1000)
// }



// for(let i=1i<=10;i++){
//    setTimeout(()=>{
//        console.log(i)
       
//    },i*1000)
// }



// function* gen(){
//     let num=100
//     while(true){
//         if(num %5==0 && num>=1){
//         yield num;
//         }
//         num--

//     }
// }
// const g =gen()
// while(true){
//     console.log(g.next().value)
// }



// const arr= [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

// for(let i=0;i<arr.length;i++){
//     for(let j=0,k=arr[i].length-1;j<arr[i].length/2;j++,k--){
//         let temp = arr[i][j]
//         arr[i][j] = arr[i][k]
//         arr[i][k] =temp
//     }
// }
// for(let i=0,j=arr.length-1;i<arr.length/2;i++,j--){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j]=temp
// }
// console.log(arr)



// const ab= [{af:[3,98,23,0,0,22]},{af:[3,98,0,22]},{af:[3,98,23,-322]}]
// let count=0
// for(let i=0;i<ab.length;i++){
//     for(let j=0;j<ab[i].af.length;j++){
//         if(ab[i].af[j]==0){
//             count++
//         }
//     }
// }
// console.log(count)

// const today = new Date()
// console.log(today.toLocaleDateString())
// console.log(today.toDateString())



// const today = new Date()
// const yesterday = new Date(today)
// yesterday.setDate(today.getDate()-1)

// console.log(yesterday.toDateString())


//3 days before

// const today = new Date()
// const yesterday = new Date(today)
// const tuesday = new Date(today)
// yesterday.setDate(today.getDate()-1)
// tuesday.setDate(today.getDate()-3)

// console.log(tuesday.toDateString())


// function otp(){
//    return Math.floor(100000 + Math.random() * 900000).toString()
// }
// console.log(otp())


//create a callback hell and convert it to promise

// function step1(callback){
//     setTimeout(()=>{
//         console.log("step 1 finished");
//         callback()        
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log("step 2 finished");
//         callback()
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log("step 3 finished");
//         callback()        
//     },1000)
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("completed callback hell");
            
//         })
//     })
// })

//resolve using promise
// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("step 1");
//             resolve()
            
//         },1000)
//     })
// }
// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("step 2");
//             resolve()
            
//         },1000)
//     })
// }
// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("step 3");
//             resolve()
            
//         },1000)
//     })
// }

// step1().then(()=>{
//     step2().then(()=>{
//         step3().then(()=>{
//             console.log("completef using promise");
            
//         })
//     })
// })

//using asyc await

// async function run(){
//     await step1()
//     await step2()
//     await step3()
//     console.log("'completed using async await");
    
// }
// run()



// function shuffle(arr){
//     for(let i=arr.length-1;i>=0;i--){
//        let ab =  Math.floor(Math.random() * (i+1))
//         let temp = arr[i]
//         arr[i] = arr[ab]
//         arr[ab] = temp
//     }
//     return arr
// }
// console.log(shuffle([1,2,3,4]))



//second longest word inn a sentence
// const str = "My name is afeefa"

// const s = str.split(' ')
// const set = [...new Set(s)]
// const sort = set.sort((a,b)=>b.length-a.length)
// const val = sort[1]
// console.log(val)


//remove character from string
// const str = "afeefa"

// const s = str.replace(/a/g,"")
// console.log(s)

//at specoific index
// const str = "afeefa"
// const index =5

// const s = str.slice(0,index)+str.slice(index+1)
// console.log(s)


// const str = "jhfgbejfberjfber nn my name is afeefa"
// const s = str.split(' ')

// let l1 =""
// let l2=""
// for(let i=0;i<s.length;i++){
//     if(s[i].length>l1.length){
//         l2=l1
//         l1=s[i]
//     }else if(s[i].length>l2.length && s[i]!==l1){
//         l2 = s[i]
//     }
// }
// console.log(l1)
// console.log(l2)



// function sum(num){
//     if(num<0){
//         return num
//     }
//     return num+sum(num-1)
// }
// console.log(sum(123))


// function sum(num){
//     if(num<=0){
//         return num
//     }

//     return num+sum(num-1)
// }
// console.log(sum(1223))


// function rec(n){
//     if(n===0)return;
//     console.log(n)
//     return rec(n-1)
// }
// rec(5)




// function rec(n,i=1){
//     if(i>n) return;
//     console.log(i)
//     return rec(n,i+1)
// }
// rec(5)


// function rec(n){
//     if(n<1){
//         return n 
//     }
//     return n+rec(n-1)
// }
// console.log(rec(5))


// function rec(str,left=0,right=str.length-1){
//     if(left>=right)return true;
//     if(str[left]!=str[right]){
//         return false
//     }
//     return rec(str,left+1,right-1)
    
// }
// console.log(rec('madama'))



// function fib(a,b,limit){
//     if(a>limit)return;
//     console.log(a)
//     return fib(b,a+b,limit)
// }
// let limit = 5
// fib(0,1,limit)


// const arr1 = [1,2,3,4,5]
// const arr2 = [1,2,6,7,8]

// let results = []
// for(let i=0;i<arr1.length;i++){
//     let found=false
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//             found = true
//             break;
//         }
//     }
//     if(!found){
//         results.push(arr1[i])
//     }
// }
// for(let i=0;i<arr2.length;i++){
//     let found = false
//     for(let j=0;j<arr1.length;j++){
//         if(arr2[i]===arr1[j]){
//             found = true
//             break
//         }
//     }
//     if(!found){
//         results.push(arr2[i])
//     }
// }

// console.log(results)




// const myMap = new Map()
// myMap.set("name","afeefa")
// myMap.set(42,"number key")
// myMap.set(true,"boolean key")

// console.log(myMap)

// const arr = Array.from(myMap)
// console.log(arr)


// const myMap = new Map([
//     ["a",1],
//     ["b",2]
// ])
// const arr = Array.from(myMap)
// console.log(arr)


// const myMap = new Map([
//     ["a",1],
//     ["b",2]
// ]);
// const obj = Object.fromEntries(myMap)
// console.log(obj)


// const myMap = new Map([
//     ["a",1],
//     ["b",2]
// ])
// for(let [key,value] of myMap){
//     console.log(`${key}:${value}`)
// }



// //second least occurence
// const arr = [1,2,2,2,3,3,3,3,4,5]

// const array = []

// const map =new Map()

// for(const val of arr){
//     if(map.has(val)){
//         map.set(val,map.get(val)+1)
//     }else{
//         map.set(val,1)
//     }
// }

// const a = [...map.values()]
// const ar = [...new Set(a)]
// const sort  =ar.sort((a,b)=>b-a)
// const value  = sort[1]

// const arrrr = Array.from(map)
// for( const [k,v] of arrrr){
//     if(v===value){
//         array.push(Number(k))
//     }
// }
// console.log(array)





//toi

// const person = {
//     name:"afeefa",
//     func:function(){
//         console.log("helooo")
//     }
// }

// const obj = {
//     fun:function(){
//         this.func()
//     }
// }

// const greetPerson = obj.bind(person)
// greetPerson("Alice")

// function p(){
//   return new Promise((resolve,reject)=>{
//     let a=1
//     if(a==1){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// }) 
// }

// async function run(){
//     try{
//         const data = await p()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// run()


// (function (){
//     var x=1
//     console.log(x)
// })()
// console.log(x)


// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     console.log(`Request method ${req.method}, Request URL ${req.url}`);
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send("hello")
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })


// min(root){
//     if(!root.left){
//         return root.value
//     }
//     return this.min(root.left)
// }



//proxy object
// const person = {
//     name:"afeefa",
//     age:30
// }

// const obj = {
//     get(target,property){
//         console.log(`accessing ${property}`)
//         return target[property]
//     },
//     set(target,property,value){
//         console.log(`setting ${property} to value ${value}`)
//         target[property] = value
//         return true
//     }
// }
// const proxy = new Proxy(person,obj)
// proxy.age = 35
// console.log(proxy.age)



//proxy object validation for age
// const person = {
//   name: "John",
//   age: 25
// };

// const validator = {
//   set(target, property, value) {
//     if (property === "age") {
//       if (typeof value !== "number") {
//         console.log("Age must be a number.");
//       }
//       if (value <= 0 || value > 120) {
//         console.log("Age must be between 1 and 120.");
//       }
//     }

//     target[property] = value;
//     return true;
//   }
// };

// const proxyPerson = new Proxy(person, validator);
// proxyPerson.age = "abc";


// const person = {
//     name:"afeefa",
//     age:30
// }
// const handler = {
//     set(target,prop,val){
//         if(prop==="age" && typeof val !== "number"){
//             console.log("age must be a numebr")
//             return false
//         }
//         console.log(`setting ${prop} to ${val}`)
//         target[prop] = val
//         return true
//     }
// }

// const proxy = new Proxy(person,handler)
// proxy.age =34
// console.log(person)


//has and delete traps

// const person = {
//     name:"afeefa",
//     age:30
// }
// const handler = {
//     has(target,prop){
//         if(prop==="age"){
//             return false
//         }
//         return prop in target
//     },
//     deleteProperty(target,prop){
//         if(prop==="age"){
//             console.log("you cannot delete age")
//             return false
//         }
//         delete target[prop]
//         return true
//     }
// }

// const proxy = new Proxy(person,handler)
// delete proxy.age
// console.log("name" in proxy)
// console.log(proxy)


//debouncing
// function debounce(func,delay){
//     let timeoutId
//     return function(...args){
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout(()=>{
//             func.apply(this,...args)
//         },delay)
//     }
// }

// const onInputChange = debounce(()=>{
//     console.log("api called")
// },300)

// {/* <input type="text" id="inputBox" placeholder ="type something..."/> */}


// document.getElementById("inputBox").addEventListener("input",onInputChange)



//throttling
// function throttle(func,limit){
//     let lastCall=0
//     return function(...args){
//         let now = Date.now()
//         if(now-lastCall>=limit){
//             lastCall = now
//             func.apply(this,args)
//         }
//     }
// }
// const onScroll = throttle(()=>{
//     console.log("scrolled")
// },200)

// window.addEventListener("scroll",onScroll)
