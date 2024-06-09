import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css';

export default function TodoItem(props) {
    const [check, setCheck] = useState(false);
    const [changeText, setChangeText] = useState(false);
    const myRef = useRef(null);
    useEffect(() => {
        if (check) {
            myRef.current.classList.add("activ")
        } else {
            myRef.current.classList.remove("activ")
        }
    }, [check])
    const checked = (e) => {
        setCheck(e.target.checked)
    }
    const changedText = () => {
        setChangeText(true)
    };
    return (
        <li className="list__todo"
            ref={myRef}>
            {
                changeText ? 
                <input type="text" onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        props.updateText(e.target.value, props.id)
                        setChangeText(false)
                    }
                    }}
                    className="todo__input"/> : <p>{props.text}</p>
            }
            <div className="elementsPanel">
                <input type="checkbox"
                       onClick={(e) => checked(e)}/>
                <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={changedText}/>
                <FontAwesomeIcon icon={faTrash} className="icon"onClick={() => props.deleteElem(props.id)}/>
            </div>
        </li>
    )
}