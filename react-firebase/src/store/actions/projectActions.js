export const createProject = (project) => {
    return (dispatch, getState) => {
// make async call to database whereafter we will dispatch the action
    dispatch({type: 'CREATE_PROJECT', project});
    }
}