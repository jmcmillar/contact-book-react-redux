import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import AllContacts from './components/AllContacts';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Contacts</h2>
                </div>
                <ContactForm />
                <AllContacts />
            </div>
        );
    }
}
export default App;

