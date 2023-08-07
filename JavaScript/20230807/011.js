// push
[10, 20, 30].push(40);
// pop
[10, 20, 30].pop(40);

// unshift
[10, 20, 30].unshift(40);
// shift
[10, 20, 30].shift(40);

// splice
[10, 20, 30].splice(1, 0 ,40);

// sort
[10, 20, 30].sort()
[10, 20, 30].sort((a, b) => a - b);
[10, 20, 30].sort((a, b) => b - a);

//map
[10, 20, 30].map((v, i) => v ** 2);

//forEach
[10, 20, 30].forEach((v, i) => console.log(v));

// filter
[10, 20, 30].filter((v, i) => v > 15);

// reduce
[10, 20, 30].reduce((a, c) => a + c, 0);

// includes
[10, 20, 30].includes(20);

// join
[10, 20, 30].join('!')

// reverse
[10, 20, 30].reverse()