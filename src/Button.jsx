import { useState } from "react";

function Button({ value }) { // Changed prop name to 'value'
    const [currentValue, setCurrentValue] = useState(); // Initialize state with value

    function handle() {
        setCurrentValue("X"); // Change value to "X" on click
    }

    return (
        <button className="Mybutton" onClick={handle}>
            {currentValue}
        </button>
    );
}

export default Button;
