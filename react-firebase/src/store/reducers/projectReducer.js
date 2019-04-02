// All reducers have to params: state and action. As the reducer doesn't have a state the first time it is used
// we need to give it an initial state.

const initState = {
    projects:[
        {id:'1',title:'VIDJ', content:'Rebuild the VIDJ app'},
        {id:'2',title:'TensorFlow', content:'Build the "Hello World" app of TensorFlow'},
        {id:'3',title:'Learn Python', content:'Do the complete SoloLearn course of Python'},
    ]
}
const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer