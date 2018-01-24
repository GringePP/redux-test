
export default function reducer(state = {count: 0}, action){
    const count = state.count;
    switch(action.type){
        case 'ADD_COUNT':
            return {count: count + 1}
        default:
            return state;
    }
}