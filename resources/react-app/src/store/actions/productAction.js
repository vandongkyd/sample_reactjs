import axios from 'axios';
import {ProductType} from '../actionType';

export const fetchProduct = () => async (dispatch) =>{
    console.log("aavv")
    await axios.get('http://localhost:8000/api/product').then(({data})=>{
        dispatch({type: ProductType.FETCH_PRODUCT, payload: data.data})
    });
}
