import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import "./index.css"
export default function CoursesNavigation() {
    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
              <a id="wd-course-home-link" className="list-group-item active boder border-0"   href="#/Kanbas/Courses/1234/Home">Home</a>
        <a id="wd-course-modules-link" className="list-group-item text-danger border border-0" href="#/Kanbas/Courses/1234/Modules">Modules</a>
          <a id="wd-course-piazza-link" className="list-group-item text-danger border border-0" href="#/Kanbas/Courses/1234/Piazza">Piazza</a>
              <a id="wd-course-zoom-link" className="list-group-item text-danger border border-0" href="#/Kanbas/Courses/1234/Zoom">Zoom</a>
<a id="wd-course-quizzes-link" className="list-group-item text-danger border border-0" href="#/Kanbas/Courses/1234/Assignments">Assignments</a>
    <a id="wd-course-assignments-link" className="list-group-item text-danger border border-0" href="#/Kanbas/Courses/1234/Quizzes">Quizzes</a>
          <a id="wd-course-grades-link" className="list-group-item text-danger border border-0" href="#/Kanbas/Courses/1234/Grades">Grades</a>
      </div>
  );}
  