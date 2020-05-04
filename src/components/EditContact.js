import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditContact extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newFirstName = this.getFirstName.value;
        const newLastName = this.getLastName.value;
        const newPhone = this.getPhone.value;
        const newEmail = this.getEmail.value;
        const newMessage = this.getMessage.value;

        const data = {
            newFirstName,
            newLastName,
            newEmail,
            newPhone,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getFirstName = input}
                           defaultValue={this.props.post.fname} placeholder="Enter Post Title" /><br /><br />
                           <input required type="text" ref={(input) => this.getLastName = input}
                           defaultValue={this.props.post.lname} placeholder="Enter Post Title" /><br /><br />
                           <input required type="text" ref={(input) => this.getPhone = input}
                           defaultValue={this.props.post.phone} placeholder="Enter Post Title" /><br /><br />
                           <input required type="text" ref={(input) => this.getEmail = input}
                           defaultValue={this.props.post.email} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditContact);