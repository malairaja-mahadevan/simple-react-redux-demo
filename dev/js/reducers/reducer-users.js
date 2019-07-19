const initialState = {
    loaded: false,
    data: null,
    plan: null
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER_DATA':
            return Object.assign({}, state, {
                data: action.payload,
                loaded: true
            });
        case 'SET_PLAN_DATA':
            return Object.assign({}, state, {
                plan: action.payload
            });
        default:
            return state
    }
}

export default userReducer;