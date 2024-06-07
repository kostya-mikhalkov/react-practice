import { useState, useEffect } from "react";

export default function Count(props) {
    const [state, setState] = useState(0);
    useEffect(() => {
        let timer;
        if (state < -2) {
            timer = setInterval(() => {
                if(state < 0) {
                    setState(state => state + 1)
                } 
                return () => clearInterval(timer)
            }, 1000)
        }
        if (state >= 0) {
           return clearInterval(timer)
        }
    }, [state]);
    return props.render(state, setState)
}