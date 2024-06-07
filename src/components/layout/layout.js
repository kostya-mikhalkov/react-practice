import React, {useState} from 'react';

export default function Layout(props) {
    return (
        <div>
            {props.header}
            {React.Children.map(props.children, (child, i) => {
                if (i === 0) return;
                return child
            })}
            {props.footer}
        </div>
    )
}