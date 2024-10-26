import React from "react";

function Inp({name,type}){
return(
    <div>
        <label>{name}:  </label>
        <input type={type} />
    </div>
)
}

export default Inp