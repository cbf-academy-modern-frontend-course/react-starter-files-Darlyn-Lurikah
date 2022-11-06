import React, {useState} from 'react';

const ClickCounter = () => {
    const buttonStyle = {
        "color": "white",
        "backgroundColor": "#007cba",
        "padding": "15px",
        "border": "none",
        "borderRadius": "5px",
        "marginTop": "10px",
        "fontSize": "20px",
        "fontWeight": "bold"
    };

    const unclickStlye = {
        "backgroundColor": "red",
        "marginLeft": "140px"
    };
    const[count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <div>Click the button below to increment the counter</div>
            <button style={buttonStyle} onClick={() => setCount(count + 1)}>Click!</button>
            <button style={{...buttonStyle, ...unclickStlye}} onClick={count > 0 ? () => setCount(count - 1): undefined}>Unclick!</button>
        </div>
    );
}

export default ClickCounter;