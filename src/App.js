import { useState, useEffect } from "react";

import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MousePositionDisplay from "./components/MousePositionDisplay/MousePositionDisplay";
import MouseTracker from "./components/mousetracker/MouseTracker";
import Count from "./components/count/Count";
import HeaderToDo from "./components/ToDo/header/HeaderToDo";
import TodoItem from "./components/ToDo/TodoItem/TodoItem";
import TodoList from "./components/ToDo/TodoList/TodoList";

function App() {
  const [form, setForm] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    setForm([...form, {
      text: e.target[0].value,
      done: false,
      id: form.length
    }]);
    e.target[0].value = '';
  }
 const updateText = (newText, index) => {
    if (!form) return
    setForm(form.map((item, ind) => {
      if (index === ind) {
        return {...item, text: newText}
      }
      return item;
    }))
  }
  const deleteElem = (index) => {
    setForm(form.filter((item, ind) => index !== ind))
    console.log(index)
  }
  return (
    <div>
        <HeaderToDo formSubmit={formSubmit}/>
        <TodoList data={form} updateText={updateText} deleteElem={deleteElem}/>
    </div>
  )
}

export default App;
