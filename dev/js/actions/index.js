import axios from 'axios';
const getUserData = () => {
    return((dispatch) => {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
        // We get the API response and receive data in JSON format...
        .then((response) => {
            dispatch({type: 'SET_USER_DATA', payload: response.data})
        }).catch((err)=>{
            console.log(err);
        })
    })
};

const setPlanData = (plan) => {
    return {
        type: 'SET_PLAN_DATA', 
        payload: plan
    }
};

export const actions = {
    getUserData,
    setPlanData
}
