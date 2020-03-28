import React from 'react';

const Rainbow = (WrappedComponent) => {
    let colors = ['red', 'green', 'yellow', 'brown', 'purple', 'pink']
    let colorName = colors[Math.floor(Math.random()*6)] + '-text'

    return (props) => (
        <div className={colorName}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Rainbow