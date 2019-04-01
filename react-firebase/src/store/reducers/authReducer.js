// All reducers have to params: state and action. As the reducer doesn't have a state the first time it is used
// we need to give it an initial state.

const initState = {

}
const authReducer = (state = initState, action) => {
    return state
}

export default authReducer