import { combineReducers} from 'redux';
import StudentsReducer from '../redux/reducers/StudentsReducer';


const RootReducer=combineReducers({
    StudentsReducer,
})

export default RootReducer;