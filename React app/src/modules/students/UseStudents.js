import { useEffect, useState }  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { StudentsActions } from '../../redux/actions/StudentsActions';
export default function UseStudents(){
    const[loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const studentsDataArray=useSelector(state=>state.StudentsReducer.studentsData);
    useEffect(()=>{
        dispatch(StudentsActions(setLoading));
    },[])
    return[studentsDataArray,loading];
}