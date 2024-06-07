import { useState } from "react";

export default function MouseTracker(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function onMouse(setX, setY, e) {
        setX(e.clientX);
        setY(e.clientY);
    }
    return (
        <div onMouseMove={(e) => onMouse(setX, setY, e)}
             style={{'width': '1000px', 'height': '1000px'}}>
                {props.render(x, y)}
        </div>
    )
}