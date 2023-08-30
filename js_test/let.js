let hello = 'first hello';
// hello = 'second hello'; // 재정의 

//scope
if(true) { 
    let hello  = 'second hello';
    console.log(hello); // second hello
}
// ------
console.log(hello); // first hello hello