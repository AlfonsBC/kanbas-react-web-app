import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControlButtonsLeft from "./AssignmentControlButtonsLeft";
import AssignmentEliminate from "./AssignmentEliminate";
import AssignControls from "./AssignControls";
import TopControlButtons from "./TopControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import {useParams} from "react-router";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, editAssignment, deleteAssignment } from "./reducer";
import { UseDispatch } from "react-redux";
import * as client from "./client";
import "./index.css"
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
    };
    useEffect(() => {
      fetchAssignments();
    }, []);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const courseAssignments = assignments.filter((assignment:any) => assignment.course === cid);
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

      {courseAssignments.map((assignment:any) => (
      <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      {assignment.title}
    <br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> {assignment.available_date} at 12:00am | <br/> <strong>Due</strong> {assignment.due_date} at 11:59pm | {assignment.points}pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons
          assignmentId={assignment._id}
          deleteAssignment={(assignmentId) => {dispatch(deleteAssignment(assignmentId));}}
          editAssignment={(assignmentId) => {dispatch(editAssignment(assignmentId));}}/>

    <AssignmentEliminate assignmentId={assignment._id} deleteAssignment={(assignmentId) => {dispatch(deleteAssignment(assignmentId));}}/>

      </div>
      </div>
     </li>
      ))}
      </ul>
      </li>
      </ul>
      </div>
);}
