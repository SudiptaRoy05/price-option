import "./App.css";
import Axios from "./Axios";
import LineChart from "./LineChart";
import Nav from "./Nav";
import PriceOptions from "./PriceOptions";


function App() {
  return (
    <>
     <Nav></Nav>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Axios></Axios>

    </>
  );
}

export default App;
