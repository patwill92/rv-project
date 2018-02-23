import {HOME_UI} from "../types";
import axios from 'axios'
import query from '../../../helpers/query'

const {queryDealers} = query();

export const getDealers = payload => {
    if (payload && payload.dispatchData) {
        return {
            type: HOME_UI,
            payload: payload.dispatchData
        }
    }
    return async dispatch => {
        const {data} = await axios.get('/api/dealers');
        dispatch({type: HOME_UI, payload: data})
    }
};

export const filterDealers = payload => async dispatch => {
    const {action, currentQuery, value, dealers} = payload;
    if (action) {
        let query = [...currentQuery, value];
        let newList = queryDealers(query, dealers);
        dispatch({type: HOME_UI, payload: newList})
    } else {
        let query = currentQuery.filter(currentVal => {
            return value !== currentVal;
        });
        let newList = queryDealers(query, dealers);
        dispatch({type: HOME_UI, payload: newList})
    }
};
