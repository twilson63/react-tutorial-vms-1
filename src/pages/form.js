import React from 'react'
import TextField from '../components/text-field'
import Button from '../components/button'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

const mapStateToProps = function(state) {
  console.log(state)
  return state
}

const connector = connect(mapStateToProps)

const Form = function(props) {
  return (
    <div className="pa4">
      <h2>Add/Edit Video Link</h2>
      <form
        onSubmit={function(event) {
          event.preventDefault()
          fetch('http://localhost:4000/videos', {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(props.video)
          })
            .then(function(res) {
              return res.json()
            })
            .then(function(doc) {
              props.dispatch({ type: 'RESET_VIDEO_STATE' })
              return props.history.push('/')
            })
        }}
      >
        <TextField
          label="Name"
          description="name of video"
          value={props.video.name}
          onChange={function(value) {
            props.dispatch({
              type: 'SET_VIDEO_NAME',
              payload: value
            })
          }}
        />
        <TextField
          label="Link"
          description="(youtube) link to video"
          value={props.video.link}
          onChange={function(value) {
            props.dispatch({
              type: 'SET_VIDEO_LINK',
              payload: value
            })
          }}
        />
        <TextField
          label="Description"
          description="some description of video contents"
        />

        <div className="measure">
          <Button>submit</Button>
        </div>
      </form>
    </div>
  )
}

export default connector(Form)
