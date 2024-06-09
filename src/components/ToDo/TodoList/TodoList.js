import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
export default function TodoList(props) {
    return (
        <ul>
            {props.data.length > 0 ? props.data.map((item, ind) => {
                return <TodoItem text={item.text}
                                 key={item.id}
                                 id={item.id}
                                 updateText={props.updateText}
                                 deleteElem={props.deleteElem}/>
            }) : <span className='span__todo'>Добавьте свою первую задачу</span>}
        </ul>
    )
}