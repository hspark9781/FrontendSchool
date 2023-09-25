import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useScroll from "./Hook/useScroll";

function App() {
  
  // const mouseLocation = useMouseLocation();

  const isBottom = useScroll();
  console.log(isBottom);

  return (
    <div style={{height : "3000px"}}>
      {/* <div style={{height : 100, width : 100, backgroundColor: mouseLocation.x > 100 ? "royalblue" : "hotpink" }}></div> */}
        <InputComponent/>
        <SomethingComponent/>
    </div>
  );
}
export default App;
