import { useSelector} from "react-redux";

export default function AssignmentEliminate({assignmentId, deleteAssignment}:{
    assignmentId:string, deleteAssignment: (assignmentId: string) => void}) {
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const specificAssignment = assignments.filter((assignment:any) => assignment._id === assignmentId);
    return (
    <div id="wd-eliminate-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
    <h1 className="modal-title fs-5" id="staticBackdropLabel">
    Are you sure to delete this assignment? </h1>
<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
Cancel </button>
<button onClick={() => {
    deleteAssignment(assignmentId);
}} type="button" data-bs-dismiss="modal" className="btn btn-danger">
Delete </button>
</div>
</div>
</div>
</div>
);
    }