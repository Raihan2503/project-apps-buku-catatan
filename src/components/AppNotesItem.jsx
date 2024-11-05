import React from "react";
import { formatDate } from "../formatDate";
import ButtonDelete from "./ButtonDelete";
import ButtonArsip from "./ButtonArsip";

function AppNotesItem({id, title, createdAt, body, archived, onDelete, onArsip}) {
    if(!archived) {
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
                        <ButtonArsip id={id} onArsip={onArsip} />
                    </div>
                </div>
            </div>
        )
    } else {
        return <p>Tidak Ada Catatan</p>
    }
}

export default AppNotesItem;