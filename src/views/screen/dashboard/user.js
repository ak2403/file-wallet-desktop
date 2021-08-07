import React, { Component } from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getConnections} from '../../../action/connections'

class Users extends Component {
  componentDidMount() {
    this.props.getConnections()
  }

  render() {
    const {connections} = this.props

    return <div>
      Users
      {connections.map(item => {
        const {user} = item
        
        return <div key={item._id}>
          {user.email}
        </div>
      })}
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getConnections,
}, dispatch)

const mapStateToProps = props => {
  const {connection} = props;

  return {
    connections: connection.connections
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)