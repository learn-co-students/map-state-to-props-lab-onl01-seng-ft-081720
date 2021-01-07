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

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(Users);
