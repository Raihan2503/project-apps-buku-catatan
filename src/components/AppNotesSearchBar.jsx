import React from "react";

class AppNotesSearchBar extends React.Component {
    constructor(props) {
        super(props);

        // inisialisai state
        this.state = {
            title: '',
        }
    }

    render() {
        return <input type="text" 
        placeholder="Cari Catatan..."
        value={this.props.searchQuery}
        onChange={(e) => this.props.onSearchChange(e.target.value)} />
    }
}

export default AppNotesSearchBar;