import "./index.css"
import TopButtons from "./TopButtons";
import SearchNames from "./SearchNames";
import Table from "./Table";
import {assignments, enrollments, users, grades} from "../../Database";
import { useParams } from "react-router";

function Find_student_grades(nuid: string) {
    const {cid} = useParams();
    //console.log("Curse ID");
    //console.log(cid);
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    //console.log("Curse Assignments");
    //console.log(courseAssignments);
    const studentInfo = users.filter((user) => user._id === nuid);
    //console.log("Student Information");
    //console.log(studentInfo);
    let assign_ids = [];
    let student_grades = [];
    for (let i=0; i < courseAssignments.length; i++ ){
        const id_assignment = courseAssignments[i]._id;
        assign_ids.push(id_assignment);
    }
    //console.log("Curse Assignments Id with {cid}");
    //console.log(assign_ids);
    for (let i=0; i< assign_ids.length; i++){
        const idx = assign_ids[i];
        const courseGrades_assignment = grades.filter((grade) => grade.assignment === idx);
        const unique_grade = courseGrades_assignment.find((gradestudent) => gradestudent.student === nuid);
        student_grades.push(unique_grade?.grade);
    }
    //console.log("Student grades");
    //console.log(student_grades);
    return (
        <tr className="table-white">
        <td>{studentInfo[0].firstName} {studentInfo[0].lastName}</td>
        {student_grades.map((grade) =>(
            <td>{grade}</td>
        ))
        }
        </tr>    
    );}


export default function Grades(){
    const {cid} = useParams();
    const courseEnrollments = enrollments.filter((enroll) => enroll.course === cid);
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

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
{courseEnrollments.map((student) => (
    Find_student_grades(student.user)
))}
</tbody>
</table>
</div>
</div>
    ); 
}