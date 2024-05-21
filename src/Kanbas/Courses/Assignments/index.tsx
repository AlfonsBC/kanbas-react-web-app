import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControlButtonsLeft from "./AssignmentControlButtonsLeft";
import AssignControls from "./AssignControls";
import TopControlButtons from "./TopControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

import "./index.css"
export default function Assignments() {
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
      <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong><a className="wd-assignment-txt"
      href="#/Kanbas/Courses/1234/Assignments/123">A1</a></strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>

     </li>
     <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong><a className="wd-assignment-txt"
      href="#/Kanbas/Courses/1234/Assignments/123">A2</a></strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
      
     </li>
     <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong><a className="wd-assignment-txt"
      href="#/Kanbas/Courses/1234/Assignments/123">A3</a></strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
      
     </li>
     <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong><a className="wd-assignment-txt"
      href="#/Kanbas/Courses/1234/Assignments/123">A4</a></strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
     </li>
     <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong>A5</strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
      
     </li>
     <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong>A6</strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
      
     </li>
     <li className="wd-assignment list-group-item p-3 ps-1">
        <div className="row">
        <div className="col-2 pt-4">
      <AssignmentControlButtonsLeft/>
      </div>
      <div id="wd-assignment-text" className="col-8 ">
      <strong>A7</strong><br/>
      <span className="text-danger">Multiple Modules </span>| <strong>Not available until</strong> May 6 at 12:00am | <br/> <strong>Due</strong> May 13 at 11:59pm | 100pts
      </div>
      <div className="col-2 pt-4">
      <AssignmentControlButtons/>
      </div>
      </div>
      
     </li>
      </ul>
      </li>
      </ul>
      </div>
);}
