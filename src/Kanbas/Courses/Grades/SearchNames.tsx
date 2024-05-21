import { FaSearch } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import "./index.css"
export default function SearchNames(){
    return (
        <div className="row">
            <div className="col-6">
          <h5> <strong> Student Names</strong></h5>
          <div className="row float-start">  
                <span className="me-2 position-relative">
                <FaSearch style={{ top: "8px" }}
className="text-secondary position-absolute mb-3 ps-3 fs-2" />
<input placeholder="      Search Students"
                           className="form-control me fs-6"
                           id="wd-search-students"/>
</span>
 </div>
 <br/><br/>
 <div className="float-start mt-3">
    <button className="btn btn-secondary"><LiaFilterSolid className="fs-3 me-2"/>Apply Filters</button>
 </div>
            </div>
            <div className="col-6">
        <h5><strong>Assignment Names</strong></h5>
        <div className="row float-start">  
                <span className="me-2 position-relative">
                <FaSearch style={{ top: "8px" }}
className="text-secondary position-absolute ps-3 fs-2 mt" />
<input placeholder="      Search Assignments"
                           className="form-control me fs-6"
                           id="wd-search-assignment"/>
</span>
 </div>
            </div>
        </div>
    );
}