import {OPEN_MODAL} from "../types";
import axios from 'axios'

export const sendForm = payload =>  async dispatch => {
    const {data} = await axios.post('/api/form', payload);
    dispatch({type: OPEN_MODAL, payload: data})
};
