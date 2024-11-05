import React from "react";
import AppNotesSearchBar from "./AppNotesSearchBar";
import AppNotesBody from "./AppNotesBody";
import { getData } from "../data";
import AppNotesFooter from "./AppNotesFooter";

class AppNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getData(),
            searchQuery: ''
        }

        // bind handler
        this.onDelete = this.onDelete.bind(this);
        this.onArsip = this.onArsip.bind(this);
        this.onPindahkan = this.onPindahkan.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDelete(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({notes});
    }

    onPindahkan(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: false } : note
            )
        }));
    }

    onArsip(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: true } : note
            )
        }))
    }

    onAddNotesHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        })
    }

    onSearchHandler = (query) => {
        this.setState({ searchQuery: query });
    };

    render() {
        const { notes, searchQuery } = this.state;

        // Filter catatan aktif dan arsip berdasarkan pencarian
        const activeNotes = notes.filter(note => 
            !note.archived && 
            (note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            note.body.toLowerCase().includes(searchQuery.toLowerCase()))
        );

        const archivedNotes = notes.filter(note => 
            note.archived && 
            (note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            note.body.toLowerCase().includes(searchQuery.toLowerCase()))
        );

        return (
            <div className="app-container">
                <nav>
                    <h1 className="header">Notes App</h1>
                    <AppNotesSearchBar
                    searchQuery={searchQuery} 
                    onSearchChange={this.onSearchHandler} />
                </nav>
                <AppNotesBody activeNotes={activeNotes} 
                archivedNotes={archivedNotes} 
                onDelete={this.onDelete} 
                onArsip={this.onArsip}
                onPindahkan={this.onPindahkan}
                onAddContacts={this.onAddNotesHandler}/>
            <AppNotesFooter />
            </div>
        )
    }
}

export default AppNotes;