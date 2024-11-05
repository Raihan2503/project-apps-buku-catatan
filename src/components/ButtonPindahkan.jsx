import React from "react";

function ButtonPindahkan({id, onPindahkan}) {
    return <button id={id} onClick={() => onPindahkan(id)}>Pindahkan</button>
}

export default ButtonPindahkan;