import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControlButtonsLeft from "./AssignmentControlButtonsLeft";
import AssignControls from "./AssignControls";
import TopControlButtons from "./TopControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {assignments} from "../../Database";
import "./index.css"
export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    return (
      <div id="wd-assignments">
      <AssignControls /><br /><br /><br /><br />
      <ul id="wd-assignment" className="list-group rounded-0">
      <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
     <BsGripVertical/>
    <GoTriangleDown/>
     ASSIGNMENTS
     <TopControlButtons/>
      </div>
      <ul className="wd-assignments list-group rounded-0">

      {courseAssignments.map((assignment) => (
      <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
     <Link key={`#/Kanbas/Courses/${cid}/Assignments`} to={`${assignment._id}`}>
      {assignment.title}
    </Link>
    <br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> {assignment.available_date} at 12:00am | <br/> <strong>Due</strong> {assignment.due_date} at 11:59pm | {assignment.points}pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
     </li>
      ))}
      </ul>
      </li>
      </ul>
      </div>
);}
