import React from "react";
import { formatDate } from "../formatDate";
import ButtonDelete from "./ButtonDelete";
import ButtonPindahkan from "./ButtonPindahkan";

function AppNotesItemArsip({id, onDelete, onPindahkan, title, createdAt, body, archived}) {
    if(archived) {
        return (
            <div className="card">
                <div className="card-item">
                    <h3>{title}</h3>
                    <span>{formatDate(createdAt)}</span>
                    <p>{body}</p>
                </div>
                <div className="btn-action">
                    <div className="btn-delete">
                        <ButtonDelete id={id} onDelete={onDelete}/>
                    </div>
                    <div className="btn-archive">
                       <ButtonPindahkan id={id} onPindahkan={onPindahkan}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return <p>Tidak Ada Catatan</p>
    }
}

export default AppNotesItemArsip;