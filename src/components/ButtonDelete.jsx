import React from "react";

function ButtonDelete({id, onDelete}) {
    return <button id={id} onClick={() => onDelete(id)}>Delete</button>
}

export default ButtonDelete;