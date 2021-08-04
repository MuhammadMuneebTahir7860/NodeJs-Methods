import axios from 'axios';

export const StudentsActions=(setLoading)=>async(dispatch)=>{
    try{
        setLoading(true)
        const serverData=await axios.get("http://localhost:5000/");
        const getData=serverData.data;
        dispatch(
            {
                type:'GET',
                payload:getData,
            }
        )
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        setLoading(false)
    }
}