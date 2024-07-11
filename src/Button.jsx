import { useState } from "react";

function Button({ value, handleClick,index }) { 
    
    function handle() {
        if(value===null){
            handleClick(index);   
        }
    }

    return (
        <button className="Mybutton" onClick={handle}>
            {value}
        </button>
    );
}

export default Button;
