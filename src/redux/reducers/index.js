import {combineReducers} from 'redux'

import ui from './uiReducer'
import dealers from './dealerReducer'

export default combineReducers({
    ui,
    dealers
})