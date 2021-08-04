
const initialState = {
    studentsData:[],
};

const StudentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET':
          return{
            ...state,
            studentsData:action.payload,
          }
               
        default:
            return state;
    }
}

export default StudentsReducer;