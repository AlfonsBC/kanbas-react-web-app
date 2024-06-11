import store from "./store";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import * as client from "./Courses/client";
import { useState, useEffect } from "react";
import "./styles.css"

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
  _id: "0", name: "New Course", number: "New Number",
  startDate: "2023-09-10", endDate: "2023-12-15",
  images: "a.jpg", description: "New Description"
  });
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };
  const addNewCourse = async () => {
  const newCourse = await client.createCourse(course);
  setCourses([...courses, newCourse]);
  };  

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
    };
  useEffect(() => {
  fetchCourses();
  }, []);

    const updateCourse = async () => {
      await client.updateCourse(course);
      setCourses(
      courses.map((c) => {
      if (c._id === course._id) {
      return course;
      } else {
      return c;
      }
      })
      );
      };
    return (
      <Provider store={store}>
<div id="wd-kanbas" className="h-100">
  <div className="d-flex h-100">
    <div className="d-none d-md-block bg-black">
      <KanbasNavigation />
    </div>
    <div className="flex-fill p-4">
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route path="Dashboard" element={<Dashboard
                                          courses={courses}
                                          course={course}
                                          setCourse={setCourse}
                                          addNewCourse={addNewCourse}
                                          deleteCourse={deleteCourse}
                                          updateCourse={updateCourse} />} />
        <Route path="Courses/:cid/*" element={<Courses courses={courses}/>} />
        <Route path="Calendar" element={<h1>Calendar</h1>} />
        <Route path="Inbox" element={<h1>Inbox</h1>} />
      </Routes>
    </div>
  </div>
</div>
</Provider>

  );}
  