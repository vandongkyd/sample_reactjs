import axios from 'axios';
import {TicketTypes} from '../actionType';

export const fetchTickets = () => async (dispatch) =>{
  await axios.get('http://localhost:8000/api/product').then(({data})=>{
   dispatch({type: TicketTypes.FETCH_TICKETS, payload: data.data})
  });
}
