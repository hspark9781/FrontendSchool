function sayHello() {
    return new Promise((resolve, reject) => {
        // const hello = 'hello hello';
        // resolve(hello);
        // reject(new Error());
        resolve('hello!!!');
    });
}

// sayHello().then((resovledData) => {
//     console.log(resovledData);
//     return resovledData;
// }).then((resovledData) => {
//     console.log(resovledData);
//     return resovledData;
// }).then((resovledData) => {
//     console.log(resovledData);
// }).catch((error) => {
//     console.log(error);
// });

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();

