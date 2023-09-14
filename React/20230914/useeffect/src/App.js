import {useState, useEffect} from 'react';


// // 컴포넌트가 업데이트 될 때마다 매번 실행
// useEffect(()=>{
// 	console.log('hello world');
// })

// // 처음에만 실행
// useEffect(()=>{
// 	console.log('hello world');
// }, [])

// // 변수들의 변화가 일어날 때마다 실행
// useEffect(()=>{
// 	console.log('hello world');
// }, [변수1, 변수2...])

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  useEffect(() => {
    if(count % 2 === 0) {
      console.log("이팩트!");
      console.log(count, "짝수입니다.");
    } else {
      console.log(count, "홀수 입니다.");
    }
    // cleanup effect
    return () =>{
      console.log(count, "컴포넌트가 바뀌기 직전입니다.");
    }
  },);
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;