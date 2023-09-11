import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Forecast from "./components/Forecast";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/forecast" element ={<Forecast/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}
