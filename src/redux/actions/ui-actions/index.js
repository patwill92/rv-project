import {TOGGLE_NAV, OPEN_MODAL, HOME_UI} from "../types";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
        payload
    }
};

export const openModal = payload => {
    return {
        type: OPEN_MODAL,
        payload
    }
};

export const homeUI = payload => {
    let {dispatchData} = payload;
    if(dispatchData){
        return {
            type: HOME_UI,
            payload: dispatchData
        }
    }
    return {
        type: HOME_UI,
        payload
    }
};

