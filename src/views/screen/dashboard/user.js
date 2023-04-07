import React, { Component } from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import List from '../../ui/List'
import Header from '../../ui/Header'
import {getConnections} from '../../../action/connections'

class Users extends Component {
  componentDidMount() {
    this.props.getConnections()
  }

  render() {
    const {connections} = this.props
    const optionsForList = [{
      title: 'Disconnect',
      name: 'disconnect',
      onClick: () => {},
    }, {
      title: 'Remove',
      name: 'remove',
      onClick: () => {},
    }]

    return <div>
      <Header 
        className="ss-user-header"
        title="Users" />
      <List data={connections} menuOptions={optionsForList} />
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