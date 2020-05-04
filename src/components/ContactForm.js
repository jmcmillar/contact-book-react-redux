import React, { Component } from 'react';
import { connect } from 'react-redux';
class ContactForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const fname = this.getFirstName.value;
        const lname = this.getLastName.value;
        const phone = this.getPhone.value;
        const email = this.getEmail.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            fname,
            lname,
            phone,
            email,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getPhone.value = '';
        this.getEmail.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Add Contact</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getFirstName = input}
                           placeholder="First Name" /><br /><br />
                             <input required type="text" ref={(input) => this.getLastName = input}
                           placeholder="Last Name" /><br /><br />
                             <input required type="text" ref={(input) => this.getPhone = input}
                           placeholder="Phone" /><br /><br />
                           <input required type="text" ref={(input) => this.getEmail = input}
                           placeholder="Email" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              cols="28" placeholder="Notes" /><br /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}
export default connect()(ContactForm);