export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} alt="image course"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12341/Home">
                CS12341 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/12341/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/a.jpeg" width={200}  alt="image course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12342/Home">
                CS12342 Genomics
              </a>
              <p className="wd-dashboard-course-title">
                Course in basics Genomics
              </p>
              <a href="#/Kanbas/Courses/12342/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/a.jpg" width={200}  alt="image course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12343/Home">
                CS12343 Bioinformatics
              </a>
              <p className="wd-dashboard-course-title">
                Course in basic Bioinformatics
              </p>
              <a href="#/Kanbas/Courses/12343/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/b.jpg" width={200}   alt="image course"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12344/Home">
                CS12344 Proteomics
              </a>
              <p className="wd-dashboard-course-title">
                All you need to know in Proteomics
              </p>
              <a href="#/Kanbas/Courses/12344/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/c.jpg" width={200}  alt="image course"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12345/Home">
                CS12345 Cellular division
              </a>
              <p className="wd-dashboard-course-title">
                Course of divison in cells
              </p>
              <a href="#/Kanbas/Courses/12345/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/d.jpg" width={200}  alt="image course"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12346/Home">
                CS12346 NeuroCS
              </a>
              <p className="wd-dashboard-course-title">
                Course in Neuroscience and Machine Learning
              </p>
              <a href="#/Kanbas/Courses/12346/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/teslabot.jpg" width={200}  alt="image course"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/12347/Home">
                CS12347 AI and Society
              </a>
              <p className="wd-dashboard-course-title">
                Course in AI and Ethical decision making
              </p>
              <a href="#/Kanbas/Courses/12347/Home"> Go </a>
            </div>
          </div>

        </div>
      </div>
  );}
  