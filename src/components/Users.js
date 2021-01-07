import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
        Users - {this.props.users.length}
          {this.props.users.map((user, index) => {
            return(
            <li key={index}>{user.username}, {user.hometown}</li>
          )})}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
