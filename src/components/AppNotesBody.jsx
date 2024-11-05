import React from "react";
import AppNotesForm from "./AppNotesForm";
import AppNotesList from "./AppNotesList";
import AppNotesListArsip from "./AppNotesListArsip";

function AppNotesBody({activeNotes, archivedNotes, onDelete, onArsip, onPindahkan, onAddContacts}) {
    

    return(
        <div className="app-body">
            <div className="app-form">
                <h3>Buat catatan</h3>
                <AppNotesForm addContact={onAddContacts}/>
            </div>
             <AppNotesList activeNotes={activeNotes} 
             onDelete={onDelete} 
             onArsip={onArsip}/>    
             <AppNotesListArsip archivedNotes={archivedNotes} 
             onDelete={onDelete}
             onPindahkan={onPindahkan} />
        </div>
    )
}

export default AppNotesBody;