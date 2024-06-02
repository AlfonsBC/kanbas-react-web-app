import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Link } from "react-router-dom";
import {useParams} from "react-router";
import { useSelector} from "react-redux";
import AssignmentEliminate from "./AssignmentEliminate";

export default function AssignmentControlButtons(
    {assignmentId, deleteAssignment, editAssignment}:{
        assignmentId:string, deleteAssignment: (assignmentId: string) => void;
        editAssignment: (assignmentId: string) => void}) {
    
    const { cid} = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const specificAssignment = assignments.filter((assignment:any) => assignment._id === assignmentId);
return (
<div className="float-end">
<Link onClick={() => {
    editAssignment(assignmentId);}} key={`#/Kanbas/Courses/${cid}/Assignments/${assignmentId}`} 
        to={`${assignmentId}`} ><FaPencil  className="text-primary me-3" /></Link>

<FaTrash className="text-danger me-2 mb-1" 
        data-bs-toggle="modal" data-bs-target="#wd-eliminate-assignment-dialog"/>
<GreenCheckmark />
<IoEllipsisVertical className="fs-4" />

<AssignmentEliminate assignmentId={assignmentId} deleteAssignment={deleteAssignment}/>
</div>
);}