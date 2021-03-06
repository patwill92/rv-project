import {TOGGLE_NAV, OPEN_MODAL, HOME_UI} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return {...state, nav: action.payload};
        case OPEN_MODAL:
            let payload = !action.payload ? action.payload :
                {...state.modal, ...action.payload};
            return {...state, modal: payload};
        case HOME_UI:
            return {...state, home: {...state.home, ...action.payload}};
        default:
            return state;
    }
}