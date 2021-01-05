import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class ConnectedUsers extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          { console.log(this.props)}
          { console.log(this.state)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  return { 
    username: state.username,
    hometown: state.hometown
   }
}

// connect this component to Redux
export default connect(mapStateToProps)(ConnectedUsers)
