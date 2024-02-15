import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#040714] text-[#f9f9f9] font-sans m-0 p-0 min-h-screen scroll-smooth box-border ">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
