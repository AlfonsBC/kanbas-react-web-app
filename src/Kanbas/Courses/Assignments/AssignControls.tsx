import { FaPlus } from "react-icons/fa6";
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css"
export default function ModulesControls() {
return (
<div id="wd-assigment-controls" className="text-nowrap">
<div className="row float-start">  
                <span className="me-2 position-relative">
                <FaSearch style={{ top: "8px" }}
className="text-secondary position-absolute ps-3 fs-2 mt" />
<input placeholder="      Search ..."
                           className="form-control me fs-6"
                           id="wd-search-assignments"/>
</span>
 </div>
<button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
Assignment
</button>
<button id="wd-group-assignment"  className="btn btn-lg btn-secondary me-1 float-end">
<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
Group</button>
</div>
);
}