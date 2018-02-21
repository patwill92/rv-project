import {GET_DEALERS} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case GET_DEALERS:
            return action.payload || [];
        default:
            return state;
    }
}