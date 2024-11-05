import React from "react";

function ButtonArsip({id, onArsip}) {
    return <button id={id} onClick={() => onArsip(id)}>Arsipkan</button>
}

export default ButtonArsip;