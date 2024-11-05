import React from "react";

class AppNotesForm extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            karakter: 50
        }

        // bind handler
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTitle(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onChangeBody(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addContact(this.state);
      }

    render() {
        return (
                <form onSubmit={this.onSubmit}>
                    <span className="sisa-karakter">Sisa Karakter: {this.state.karakter - this.state.title.length}</span>
                    <input type="text" placeholder="Ini adalah judul..."
                    maxLength={this.state.karakter}
                    onChange={this.onChangeTitle} />
                    <textarea id="" 
                    cols="30"
                    rows="10" 
                    placeholder="Tuliskan catatanmu di sini..."
                    onChange={this.onChangeBody}></textarea>
                    <button type="submit">Buat</button>
                </form>
        )
    }
}

export default AppNotesForm;