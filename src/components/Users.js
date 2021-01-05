import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.totalUsers} Users!
          {this.props.users.map((user, index) => {
            return <li key={index}>{user.username}</li>
          })
        }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users, totalUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)