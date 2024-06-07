import { useState } from "react";
import './HeaderToDo.css';

export default function HeaderToDo(props) {
    return (
        <div className="header__todo">
            <form onSubmit={(e) => props.formSubmit(e)}
                  className="form__todo">
                <input type="text"
                       className="todo__input" />
                <button>Создать задачу</button>
            </form>
        </div>
    )
}