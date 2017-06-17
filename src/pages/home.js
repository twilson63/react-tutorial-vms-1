import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux'
import { map } from 'ramda'

const mapStateToProps = function(state) {
  return {
    videos: state.videos
  }
}
const connector = connect(mapStateToProps)

class Home extends React.Component {
  componentDidMount() {
    const props = this.props
    fetch('http://localhost:4000/videos')
      .then(res => res.json())
      .then(videos => {
        props.dispatch({
          type: 'SET_VIDEOS',
          payload: videos
        })
        //console.log(JSON.stringify(videos, null, 2))
      })
  }
  render() {
    const props = this.props
    return (
      <div className="pa4">
        <Link to="/videos/new">
          <Button>Add Video</Button>
        </Link>
        <h2>Videos</h2>
        <ul>
          {map(function(video) {
            return (
              <li key={video.id}>
                <a className="link" href={video.link}>
                  {video.name}
                </a>
              </li>
            )
          }, props.videos)}
        </ul>
      </div>
    )
  }
}

export default connector(Home)
