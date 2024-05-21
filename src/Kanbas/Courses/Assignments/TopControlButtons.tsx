import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
export default function ModuleControlButtons() {
return (
<div className="float-end">
<button id="wd-percentage-assignment"className="rounded-pill btn-secondary ps-3">40% of Total</button>
<FaPlus style={{ left: "2px", right:"2px"  }} className="ps-auto fs-4"/>
<IoEllipsisVertical className="fs-4" ps-3 />
</div>
);}