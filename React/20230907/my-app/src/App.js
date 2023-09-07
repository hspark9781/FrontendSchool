import './App.css';



function App() {
  // const name = '라이캣';
  // function 함수() {
  //   return '함수';
  // }
  // const someStyle = {backgroundColor:"black", color:"white"}
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const second = today.getSeconds();

  
  return (
    <div>
      <h1 className="one">안녕, 라이캣! 1호</h1>
      <h2 className="two">안녕, 라이캣! 2호</h2>
      <p className="line"></p>
      
      <div style={{backgroundColor:"black", color:"white"}}>
        <h3 className="year" style={{color:"red"}}>년 : {year}</h3>
        <h3 className="monthDay">월/일 : {month}/{date}</h3>
        <h3 className="time">시간 : {hours}시 {minutes}분 {second}초</h3>
      </div>

    </div>
  );
}
export default App;
