export default function AssignmentEditor() {
 return (
    <div id="wd-assignment-editor"> 
    <h2>Assignment Name</h2>
    <input id="wd-assignment-name" type="text" size={50} defaultValue="A1 - ENV + HTML"/> <br/>
    <br/>
    <textarea id="wd-assignment-description" rows={10} cols={50} defaultValue="This assignment is available online. Submit a link to the landing page
    of your Web application eunning on Netlify. The landing page should include the following: your full name and section Links to each of the lab 
    assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbas application should include a link to naviagate
    back to the landing page.">
        
         </textarea>
    <br/>
    <br/>
    <div id="wd-assignment-details">
    <label htmlFor="wd-assignment-points">Points:</label>
    <input id="wd-assignment-points" type="number" size={50} defaultValue="100"/> <br/>
    <br/>
    <label  htmlFor="wd-assignment-group"> Assignment Group </label>
    <select id="wd-select-assignment-group">
        <option defaultValue="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECTS">PROJECTS</option>
    </select>

    <br/><br/>

    <label  htmlFor="wd-display-grade-as"> Display Grade As </label>
    <select id="wd-select-display-type">
        <option value="Percentage">Percentage</option>
        <option value="Fraction">Fraction</option>
        <option defaultValue="Letter Grade">Letter Grade</option>
    </select>
    <br/><br/>

    <label  htmlFor="wd-online-entry-options"> Online Entry Options </label>
    <br/>
    
  <input type="checkbox" name="check-entry-option" id="wd-chkbox-txtentry"/>
<label htmlFor="wd-chkbox-txtentry">Text Entry</label><br/>

<input type="checkbox" name="check-entry-option" id="wd-chkbox-website"/>
<label htmlFor="wd-chkbox-website">Website URL</label><br/>

<input type="checkbox" name="check-entry-option" id="wd-chkbox-media"/>
<label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

<input type="checkbox" name="check-entry-option" id="wd-chkbox-annotation"/>
<label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

<input type="checkbox" name="check-entry-option" id="wd-chkbox-fileupload"/>
<label htmlFor="wd-chkbox-fileupload">File Upload</label><br/>


    <br/><br/>

    <label  htmlFor="wd-assign"> Assign </label>
    <label  htmlFor="wd-assign-to"> Assign to </label><br />
    <input id="wd-assign-to-input" type="text" size={50} value="Everyone"/> <br/>
    <br/>
    <label  htmlFor="wd-due"> Due </label><br />
    
    <input type="date"
       defaultValue="2026-05-13"
       id="wd-due-date-picker"/><br/>
       <br/>
       <div>
    <label  htmlFor="wd-available"> Available from </label><br />
    <input type="date"
       defaultValue="2026-05-06"
       id="wd-available-date-picker"/><br/>
       </div>
       <div>
    <label  htmlFor="wd-until"> Until </label><br />
    <input type="date"
       defaultValue="2026-05-13"
       id="wd-until-date-picker"/><br/>
       </div>
         <br/>
    </div>
    <hr />
    <button id="wd-cancel-assignment"> Cancel </button>
    <button id="wd-save-assignment"> Save </button>
    
    
    
    </div>

);}