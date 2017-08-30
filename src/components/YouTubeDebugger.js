import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state =   {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
  }

  bit = () => {
    this.setState(
      {settings: Object.assign({},this.state.settings,{bitrate:12})}
    )
  }

  res = () => {
    this.setState(
      {settings: Object.assign({},this.state.settings,{video:{resolution: '720p'}})}
    )
  }
  render() {
    return  <div>
              <button className="bitrate" onClick={this.bit} ></button>
              <button className="resolution" onClick={this.res} ></button>
            </div>
  }

}
