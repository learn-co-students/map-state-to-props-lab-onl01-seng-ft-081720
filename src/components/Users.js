import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
      {this.props.users.length}
        <ul>
          Users!
          {this.props.users.map((user, index) => 
            <li key={index}>{user.username}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{ 
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
