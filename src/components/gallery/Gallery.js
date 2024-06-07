import {useState, useEffect} from 'react';
export default function Gallery(props) {
    return (
        <div className="gallery">
            {props.children}
        </div>
    )
}