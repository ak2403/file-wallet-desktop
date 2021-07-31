import React, { Component } from "react";
import {getConnections} from '../../../action/connections'

class Users extends Component {
  async componentDidMount() {
    const connections = await getConnections()
  }
  render() {
    return <div>
      Users
    </div>
  }
}

export default Users