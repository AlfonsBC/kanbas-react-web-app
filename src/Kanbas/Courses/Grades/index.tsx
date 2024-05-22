import "./index.css"
import TopButtons from "./TopButtons";
import SearchNames from "./SearchNames";
import Table from "./Table";
import {assignments, enrollments, users, grades} from "../../Database";
import { useParams } from "react-router";
export default function Grades(){
    const {cid} = useParams();
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    const courseEnrollments = enrollments.filter((enroll) => enroll.course == cid);
    return(
        <div id="wd-grades">
            <TopButtons/> 
            <br/><br/> <br/>
            <SearchNames/>
            <br/><br/>
            <div id="wd-css-styling-tables">
<h2>Tables</h2>
<table className="table">
<thead>
<tr className="table-secondary">
    <th>Student Name</th>
    {courseAssignments.map((assignment) => (
        <th>{assignment.title}</th>
    ))
    }
    </tr>
</thead>
<tbody>


<tr className="table-white">
    <td>Alfonso Barajas</td>
    <td>100%</td>
    <td>96.76%</td>
    <td>100%</td>
    <td>100%</td>
    </tr>


</tbody>
</table>
</div>
</div>
    ); 
}