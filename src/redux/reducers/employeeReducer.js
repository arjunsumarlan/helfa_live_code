const employee_state = {
    employees: []
}

export default employee = (state = employee_state, action) => {
    switch(action.type) {
        case "CREATE_NEW_EMPLOYEE":
            return {
                ...state,
                employees:[...state.employees,action.payload],
            }
        default:
            return state;
    }
}