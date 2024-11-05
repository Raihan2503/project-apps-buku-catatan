import React from "react";
import AppNotesItem from "./AppNotesItemArsip";
import AppNotesItemArsip from "./AppNotesItemArsip";

function AppNotesListArsip({archivedNotes, onDelete, onPindahkan}) {
    return (
        <div className="catatan-aktif">
            <h3 className="header-catatan">Arsipkan Catatan</h3>
            <div className="note-list">
                {
                    archivedNotes.length > 0 ? (
                        archivedNotes.map((noteItem) => (
                            <AppNotesItemArsip key={noteItem.id} 
                            {...noteItem} 
                            onDelete={onDelete} 
                            id={noteItem.id}
                            onPindahkan={onPindahkan} />
                        ))
                    ) : (
                        <p className="catatan">Tidak Ada Catatan</p>
                    )
                }
            </div>
        </div>
    )
}

export default AppNotesListArsip;