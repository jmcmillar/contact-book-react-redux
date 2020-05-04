import React, { Component } from 'react';
import { connect } from 'react-redux';
class Contact extends Component {
    render() {
        return (
          
            // <div className="post">
            //     <h2 className="post_title">{this.props.post.title}</h2>
            //     <p className="post_message">{this.props.post.message}</p>
            //     <div className="control-buttons">
            //         <button className="edit"
            //                 onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
            //                 }
            //         >Edit</button>
            //         <button className="delete"
            //                 onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
            //         >Delete</button>
            //     </div>
            // </div>
            <tr>
            <td>{this.props.post.fname}</td>
            <td>{this.props.post.lname}</td>
            <td>{this.props.post.phone}</td>
            <td>{this.props.post.email}</td>
            <td>{this.props.post.message}</td>
            <td><button className="edit"
                             onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
                             }
                     >Edit</button>
                     <button className="delete"
                             onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
                     >Delete</button></td>
              </tr>
        );
    }
}
export default connect()(Contact);