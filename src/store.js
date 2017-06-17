import { createStore, combineReducers } from 'redux'

const store = createStore(
  combineReducers({
    video: function(state = { name: '', link: '' }, action) {
      switch (action.type) {
        case 'RESET_VIDEO_STATE':
          return { name: '', link: '' }
        case 'SET_VIDEO_NAME':
          return { name: action.payload, link: state.link }
        case 'SET_VIDEO_LINK':
          return { link: action.payload, name: state.name }
        default:
          return state
      }
    },
    videos: function(state = [], action) {
      switch (action.type) {
        case 'SET_VIDEOS':
          return action.payload
        default:
          return state
      }
    }
  })
)

export default store
