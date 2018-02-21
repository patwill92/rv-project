import {GET_DEALERS} from "../types";

export const getDealers = payload => {
    let {dispatchData} = payload;
    if(dispatchData){
        return {
            type: GET_DEALERS,
            payload: dispatchData
        }
    }
    return {
        type: GET_DEALERS,
        payload
    }
};

