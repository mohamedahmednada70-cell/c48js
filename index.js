//q1
let num = Number("123") + 7;
console.log(num);
//q2
let value = "";
if (!value){
    console.log("invalid")

}
//q3
for (let i=1;i<=10;i++){if (i % 2 === 0)continue; 
    console.log(i);

}
//q4
let arr = [1,2,3,4,5];
let even = arr. filter(num => num %2 === 0); //=>**

console.log(even);

//q5
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let merge = [arr1 , arr2];
console.log(merge);

//q6



//q7
let A =["a","ab","abc"]
let lengths = A.map(A => A.lengths);

console.log(lengths);//printed undefined ????

//q8
function check(numb){if (numb % 3 === 0 && numb % 5 === 0){
    return "divisible by both"
} 
  return "not divisible"  
} 

console.log(check(15));

//q9
const square = num => num*num; 
console.log(square(5))

//q10
function constperson (person){
    return person.name + " is " + person . age + " yearsold ";
}
console.log(constperson({name:"john",age: 25 }));

//q11
function sum(...numbers){
    let total = 0;
    for(let num of numbers){total += num;}
return total;

}
console.log(sum(1,2,3,4,5));

//q12
let promise = new Promise(function(resolve)
{ setTimeout(function(){
    resolve("success");
},3000);

});
promise.then(function(result){
    console.log(result);
});
//q13
function largestnum(arr){
    let max = arr[0];
    for(let i= 1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
 
   }
   return max;
}
console.log(largestnum([1,3,7,2,4]));
//q14
function getKeys(keyss){return Object.keys(keyss);

}
let person = {
    name:"john",
    Age:"30",

};
console.log(getKeys(person));

//q15
function splitString(string){
    return string.split(" ");
}

console.log(splitString("The quick brown fox"));
//PART2
//1.forEach:works only with array
//forof:works with loap and array and you can use it with break,continue
//2.Hoisting:means javascribt knows about variables before it run the code with var
//(undifined)if it uses before give it avalue
//TDZ:is time before defined (let,const)if you use it before declaration, we got ERROR
//3.==:compare only avalue 5=="5"-->(true)
//===:compare value and the datatype 5(number)==="5"(string)-->(false)
//4.try: is used with code maybe output ERRORبحط فيها الكود اللي ممكن يحصل فيه ايرور
//catch:if there is an ERROR ---> catchلو حصل ايرور هيروح ل 
//5.conversion:we change the datatype 
//Number("10")===10sاحنا اللي هنغير الداتا تايب بنفسنا 
//coersion: Javascript changes the type automatically
//"5"+2===7 



