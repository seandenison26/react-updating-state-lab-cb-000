import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    this.state = {
      timesClicked: 0
    }
  }

  click = () => {
    this.setState({
      timesClicked: timesClicked + 1
    })
  }

  render() {
    return <button onClick={this.click} value={this.state.timesClicked}></button>
  }

}
