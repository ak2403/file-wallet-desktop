import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class DashboardComponent extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return <div>
      <p>Dashboard</p>
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = props => {
  const {authentication} = props;

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)