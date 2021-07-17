import React, {Component} from 'react'
import {getSystemInfo} from '../utils/electron'

class SetupComponent extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  async componentDidMount() {
    console.log(await getSystemInfo())
  }

  render() {
    console.log("hi")
    return <div>
      <p>Setup</p>
    </div>
  }
}

export default SetupComponent