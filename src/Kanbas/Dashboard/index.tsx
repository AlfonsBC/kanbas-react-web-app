export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/reactjs.jpg" width="100%" alt="Adding full computer science courses in full stack web"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card" >
          <img src="/images/a.jpeg" width="275" alt="The analysis of genomics and its purposes"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS12342 Genomics
            </a>
            <p className="wd-dashboard-course-title card-text">
            Course in basics Genomics
            </p>
            <a href="#/Kanbas/Courses/12342/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/a.jpg" width="210" alt="restating the emphasis for ml in bio"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                 CS12343 Bioinformatics

            </a>
            <p className="wd-dashboard-course-title card-text">
            Course in basic Bioinformatics
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/b.jpg" width="230" alt="representation for protoeomics"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS12344 Proteomics
            </a>
            <p className="wd-dashboard-course-title card-text">
            All you need to know in Proteomics
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/c.jpg" width="230" alt="Two cells dividing"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS12345 Cellular division
            </a>
            <p className="wd-dashboard-course-title card-text">
            Course of divison in cells
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/d.jpg" width="210" alt="Here there is a CS"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS12346 NeuroCS
            </a>
            <p className="wd-dashboard-course-title card-text">
            Course in Neuroscience and Machine Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/teslabot.jpg" width="140" alt="tesla in the bot"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS12347 AI and Society
            </a>
            <p className="wd-dashboard-course-title card-text">
            Course in AI and Ethical decision making
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>


        </div>
      </div>

      </div>
  );}
  
