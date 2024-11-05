import React from "react";
import AppNotesItem from "./AppNotesItem";

function AppNotesList({activeNotes, onDelete, onArsip}) {
    return (
        <div className="catatan-aktif">
            <h3 className="header-catatan">Catatan Aktif</h3>
            <div className="note-list">
            {
                    activeNotes.length > 0 ? (
                        activeNotes.map((noteItem) => (
                            <AppNotesItem key={noteItem.id} {...noteItem} onDelete={onDelete} onArsip={onArsip} id={noteItem.id}/>
                        ))
                    ) : (
                        <p className="catatan">Tidak Ada Catatan</p>
                    )
                }
            </div>
        </div>
    )
}

export default AppNotesList;