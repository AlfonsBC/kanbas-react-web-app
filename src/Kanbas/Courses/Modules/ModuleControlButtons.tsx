import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
return (
<div className="float-end">
<GreenCheckmark/>
<FaPlus style={{ left: "2px", right:"2px"  }} className="ps-auto fs-4"/>
<IoEllipsisVertical className="fs-4" />
</div>
);}