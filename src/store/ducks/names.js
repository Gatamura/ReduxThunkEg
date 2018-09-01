export const TYPES = {
    LIST_ALL: "Names/List",
    LIST_ALL_DISPATCH_STARTED: "Names/DispatchStarted"
}

const INITIAL_STATE = {
    name: '',
    loading: false
};

export default function todos(state = INITIAL_STATE, action){
    switch(action.type){
        case TYPES.LIST_ALL:
            return {
                ...state,
                name: action.payload.name,
                loading: false
            };
        case TYPES.LIST_ALL_DISPATCH_STARTED:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export const CREATORS = {
    listNames: name => {
        console.log('to aqui');
        return (dispatch, getState) => {
            dispatch({type: TYPES.LIST_ALL_DISPATCH_STARTED})

            setTimeout(() => {
                dispatch({type: TYPES.LIST_ALL, payload: {name: 'Gabriel Tamura Mamiya Thunk'}});
            }, 8000);
        }
    }
}