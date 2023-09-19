import { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const countThree = useRef(0); // 컴포넌트가 업데이트 되어도 값을 가지고 있다.
  let countFour = 0;

  console.log(countThree);

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  }

  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  }


  const handleCountUpThree = () => {
    countThree.current += 1;
    console.log(countThree.current);
  }


  const handleCountUpFour = () => {
    countFour += 1;
    console.log(countFour);
  }


  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )

}


function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;