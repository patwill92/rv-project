import {TOGGLE_NAV, OPEN_MODAL, HOME_UI} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return {...state, nav: action.payload};
        case OPEN_MODAL:
            return {...state, modal: action.payload};
        case HOME_UI:
            return {...state, home: {...state.home,...action.payload}};
        default:
            return state;
    }
}