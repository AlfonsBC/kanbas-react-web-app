import "./index.css"
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <form>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="form-control"  value="A1 - ENV + HTML" />
        <br />
        <textarea id="wd-description-assignment" className="form-control h-25">
        The assignment is available onlineLinks to an external site.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

Your full name and section
Links to each of the lab assignments
Link to the Kanbas application
Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <div className="row mb-3">
        <div className="col-sm-5">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label float-end">Points</label>
        </div>
        <div className="col-sm-6">
        <input id="wd-points" className="form-control" value={100} />
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
    value="2024-05-13" />
<br/>
<label htmlFor="wd-available-from">Available from</label><br/>
<input type="date"
    id="wd-available-from" 
    value="2024-05-06" />
    <br/>
<label htmlFor="wd-available-until">Until</label><br/>
<input type="date"
id="wd-available-until" 
value="2024-05-20" />
        </div></div> 
<button type="submit" className="btn btn-danger float-end">Cancel</button>
<button type="submit" className="btn btn-success float-end">Save</button>
             </form>
      </div>

  );}
  
  