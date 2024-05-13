export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
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
        <table align="center">
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="ASSIGNMENTS3">ASSIGNMENTS3</option>
                    <option value="ASSIGNMENTS4">ASSIGNMENTS4</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="percentage">Percentage</option>
                    <option value="Numerical">Numerical</option>
                    <option value="Ratio">Ratio</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
             
            </td>
            <td>
            <label htmlFor="wd-submission-type">Online Entry Options</label><br/>
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

            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                Assign
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td align="right">
            </td>
            <td>
                <label htmlFor="wd-due-date">Due </label><br/>
                <input type="date"
                        id="wd-due-date" 
                        value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right">
                
            </td>
            <td>
                <table>
                <tr>
                <td>
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input type="date"
                        id="wd-available-from" 
                        value="2024-05-06" />
                </td>
                <td>
                <label htmlFor="wd-available-until">Until</label><br/>
                <input type="date"
                    id="wd-available-until" 
                    value="2024-05-20" />
                </td>
                </tr>
                </table>
            </td>
          </tr>
        </table>
        <hr></hr>
        <table align="right">
            <tr>
                <td>
                    <button>Cancel</button>
                    <button>Save</button>
                </td>
            </tr>
        </table>
      </div>
  );}
  
  