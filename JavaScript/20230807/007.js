// 면접에서 map을 물어본다면?
// 이러한 데이터의 형태를 json이라고 합니다.
let data = [
        {
        "_id": "a",
        "index": 0,
        "age": 40,
        "name": "Gabriela",
        "gender": "female"
        },
        {
        "_id": "b",
        "index": 1,
        "age": 29,
        "name": "Molina",
        "gender": "male"
        },
        {
        "_id": "c",
        "index": 2,
        "age": 29,
        "name": "Ruiz",
        "gender": "male"
        },
        {
        "_id": "d",
        "index": 3,
        "age": 31,
        "name": "Bender",
        "gender": "male"
        }
    ];

data[0];
data[0]['name'];
data[0]['age'];
(data[0]['age'] + data[1]['age'] + data[2]['age'] + data[3]['age']) / 4;
data.map(v => v["age"]);
