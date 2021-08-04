import UseStudents from "./UseStudents"


export default function Students(){
    const[studentsDataArray,loading]=UseStudents();
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Class</th>
                <th></th>
                <th></th>
                <th>Batch</th>
                <th></th>
                <th>Roll No.</th>
            </tr>
            {loading && <p>Loading...</p>}
            {
                studentsDataArray.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.Class}</td>
                            <td></td>
                            <td></td>
                            <td>{item.Batch}</td>
                            <td></td>
                            <td>{item.RollNo}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}