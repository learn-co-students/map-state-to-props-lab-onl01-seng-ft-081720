import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    // const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {this.props.users.map((user, index) => 
            <li key={index}>{user.username}</li>
          )}
          {/* {users} */}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
// export default Users
