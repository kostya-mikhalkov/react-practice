import { useState, useEffect } from "react";

import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MousePositionDisplay from "./components/MousePositionDisplay/MousePositionDisplay";
import MouseTracker from "./components/mousetracker/MouseTracker";
import Count from "./components/count/Count";
import HeaderToDo from "./components/ToDo/header/HeaderToDo";

function App() {
  const [form, setForm] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    setForm([...form, {text: e.target[0].value}]);
    e.target[0].value = '';
  }
  return (
    <div>
        <HeaderToDo formSubmit={formSubmit}/>
        <input type="checkbox" onChange={(e) => console.log(e)}/>
    </div>
  )
}

export default App;
