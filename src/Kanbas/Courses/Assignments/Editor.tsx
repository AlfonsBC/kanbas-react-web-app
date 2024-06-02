import "./index.css"
import {useParams} from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { updateAssignment, deleteAssignment } from "./reducer";
import { useState } from "react";
export default function AssignmentEditor() {
  const { aid, cid} = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const specificAssignment = assignments.filter((assignment:any) => assignment._id === aid);
  const [titlea, setTitle] = useState(specificAssignment[0].title);
  const [ descriptiona, setDescription] = useState(specificAssignment[0].description);
  const [ptsa, setPts] = useState(specificAssignment[0].points)
  const [dueda, setDued] = useState(specificAssignment[0].due_date);
  const [avada , setAvad]= useState(specificAssignment[0].available_date);
  const [unta, setUnt] =  useState(specificAssignment[0].until);
  return (
      <div id="wd-assignments-editor">
        <form>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="form-control"  placeholder={`${specificAssignment[0].title}`} 
        onChange={(e) => 
          {
            if (specificAssignment[0].editing === false){
            dispatch(updateAssignment({...specificAssignment[0], title:e.target.value }));
            } else {
              setTitle(e.target.value);
            }
          }
          } />
        <br />
        <textarea id="wd-description-assignment" className="form-control h-25" placeholder={`${specificAssignment[0].description}`}
        onChange={(e) => 
          { if (specificAssignment[0].editing === false){
            dispatch(updateAssignment({...specificAssignment[0], description:e.target.value }));
          } else {
            setDescription(e.target.value);
          }
          
          }
          }>
        </textarea>
        <br />
        <div className="row mb-3">
        <div className="col-sm-5">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label float-end">Points</label>
        </div>
        <div className="col-sm-6">
        <input id="wd-points" className="form-control" placeholder={`${specificAssignment[0].points}`}
         onChange={(e) => 
          {if (specificAssignment[0].editing === false){
            dispatch(updateAssignment({...specificAssignment[0], points:e.target.value }));
          } else{
            setPts(e.target.value);
          }
          }
          }/>
        </div></div> 
<div className="row mb-3">
        <div className="col-sm-5">
        <label htmlFor="wd-group" className="float-end">Assignment Group</label>
        </div>
        <div className="col-sm-6">
        <select id="wd-group" className="form-control">
    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
    <option value="ASSIGNMENTS3">ASSIGNMENTS3</option>
    <option value="ASSIGNMENTS4">ASSIGNMENTS4</option>
    </select>          
     </div></div> 
     <div className="row mb-3">
        <div className="col-sm-5">
        <label htmlFor="wd-display-grade-as" className="float-end">Display Grade as</label>
        </div>
        <div className="col-sm-6">
        <select id="wd-display-grade-as" className="form-control">
      <option value="points">Points</option>
      <option value="percentage">Percentage</option>
      <option value="Numerical">Numerical</option>
      <option value="Ratio">Ratio</option>
</select>      
     </div></div> 
     <div className="row mb-3">
        <div className="col-sm-5">
        <label htmlFor="wd-display-grade-as" className="float-end"> Submission Type</label>
        </div>
        <div className="col-sm-6" >
        <select id="wd-display-grade-as" className="form-control">
      <option value="percentage">Online</option>
      <option value="Numerical">Asyncronous</option>
      <option value="Ratio">Hybrid</option>
</select> 

<label htmlFor="wd-submission-type"><strong>Online Entry Options</strong></label><br/>
<input type="checkbox" name="check-genre" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>
<input type="checkbox" name="wd-submission-type" id="wd-wwebsite-url"/>
<label htmlFor="wd-wwebsite-url">Website URL</label><br/>
<input type="checkbox"
name="wd-submission-type" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>
<input type="checkbox"
name="wd-submission-type" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotatio</label><br/>
<input type="checkbox"
name="wd-submission-type" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Uploads</label>
     </div></div> 
     <div className="row mb-3">
        <div className="col-sm-5">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label float-end">Assign</label>
        </div>
        <div className="col-sm-6">
        <label htmlFor="wd-assign-to">Assign to</label><br/>
        <input id="wd-assign-to" value={"Everyone"} />
        <br/>
        <label htmlFor="wd-due-date">Due </label><br/>
<input type="date"
    id="wd-due-date" 
    value={`${specificAssignment[0].due_date}`} 
    onChange={(e) => 
      {if (specificAssignment[0].editing === false){
        dispatch(updateAssignment({...specificAssignment[0], due_date:e.target.value }));
      } else{
        setDued(e.target.value);

      }
      }
      } />
<br/>
<label htmlFor="wd-available-from">Available from</label><br/>
<input type="date"
    id="wd-available-from" 
    value={`${specificAssignment[0].available_date}`} 
    onChange={(e) => 
      { if (specificAssignment[0].editing === false){
        dispatch(updateAssignment({...specificAssignment[0], available_date:e.target.value }));}
        else{
          setAvad(e.target.value);
        }
      }
      }/>
    <br/>
<label htmlFor="wd-available-until">Until</label><br/>
<input type="date"
id="wd-available-until" 
value={`${specificAssignment[0].until}`} 
onChange={(e) => 
  { if (specificAssignment[0].editing === false){
    dispatch(updateAssignment({...specificAssignment[0], until:e.target.value }));}
    else{
      setUnt(e.target.value);
    }
  } 
  }/>
        </div></div> 
        
        <button className="btn btn-success float-end fs-4" onClick={() => {
          if (specificAssignment[0].editing === true){
            dispatch(updateAssignment({...specificAssignment[0], 
                                        title: titlea,
                                        description: descriptiona,
                                        points: ptsa,
                                        due_date: dueda,
                                        available_date: avada,
                                        until: unta }));
          } 
        }}><Link key={`#/Kanbas/Courses/${cid}/Assignments/${aid}`} 
        to={`../Assignments`} >Save</Link></button>


        <button className="btn btn-danger float-end fs-4 me-2 text-white" onClick={() => {
          if (specificAssignment[0].editing === false){
            dispatch(deleteAssignment(specificAssignment[0]._id));
          } 
        }}>
          <Link  key={`${cid}/Assignments/${aid}`} to={`../Assignments/`}  
        >Cancel</Link></button>
             </form>
      </div>

  );}
  
  