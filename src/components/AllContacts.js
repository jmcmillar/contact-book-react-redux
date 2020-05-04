import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import EditContact from './EditContact';
class AllContacts extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">Contacts</h1>
                {this.props.posts.map((post) => (
                    <table key={post.id}>

                    <tbody>
                    
                        {post.editing ? <EditContact post={post} key={post.id} /> : <Contact post={post}
                                                                                            key={post.id} />}
                    </tbody>
                    </table>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllContacts);