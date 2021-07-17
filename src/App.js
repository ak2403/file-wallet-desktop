import React, {Component} from 'react'
import Navigation from './navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadApp} from './action/user'

class App extends Component {
  componentDidMount() {
    this.props.loadApp()
  }
  
  render() {
    const {isAppLoaded, isUserLogged} = this.props;
    return (isAppLoaded ? 
    <Navigation isUserLogged={isUserLogged} /> : 
    <div>
      <p>Loading...</p>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadApp
}, dispatch)

const mapStateToProps = props => {
  const {authentication} = props
  return {
    isAppLoaded: authentication.isAppLoaded,
    isUserLogged: authentication.isUserLogged,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
