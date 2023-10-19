/** @format */

import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";

const { courses } = db;
let temp = 0;

function Dashboard() {
  return (
    <>
      <div className="kanbas-column" style={{ width: "75%" }}>
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="d-flex flex-row flex-wrap">
          {courses.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
      </div>
    </>
  );
}

function CourseCard({ course }) {
  return (
    <a
      href={`../#/Kanbas/Courses/${course._id}`}
      className="kanbas-card"
      key={course._id}
    >
      <div className="card">
        <div className={`card-header bg-${getCourseColor()}`}>
          <i className="fa fa-ellipsis-vertical float-end kanbas-ellipsis"></i>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="card-body kanbas-card-height">
          <h5 className="card-title">{`${course.number} ${course._id} ${course.name}`}</h5>
          <h6 className="card-title">{`${course.number}.${course._id}`}</h6>
          <p className="card-text">{getCourseTerm(course.startDate)}</p>
        </div>
      </div>
    </a>
  );
}

function getCourseTerm(startDate) {
  const date = new Date(startDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  if (month >= 1 && month <= 4) {
    return `Spring ${year} Semester`;
  } else if (month >= 5 && month <= 8) {
    return `Summer ${year} Semester`;
  } else {
    return `Fall ${year} Semester`;
  }
}

function getCourseColor() {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];
  temp++;
  let index = temp % 6;
  return colors[index];
}

export default Dashboard;
