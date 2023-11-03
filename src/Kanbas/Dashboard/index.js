/** @format */

import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";
import { React, useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <>
      <div className="kanbas-column" style={{ width: "75%" }}>
        <h1>Dashboard</h1>
        <div className="mb-2">
          <h5>Course Modification</h5>
          <div
            className="mb-2 me-2"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <input
              value={course.name}
              className="form-control me-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
              value={course.number}
              className="form-control me-2"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
              value={course.startDate}
              className="form-control me-2"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
            <input
              value={course.endDate}
              className="form-control me-2"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
            <button
              onClick={addNewCourse}
              className="btn btn-success mb-2 me-2"
            >
              Add
            </button>

            <button
              onClick={updateCourse}
              className="btn btn-warning mb-2 me-2"
            >
              Update
            </button>
          </div>
        </div>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
            <a
              href={`../#/Kanbas/Courses/${course._id}`}
              className="kanbas-card"
              key={course._id}
            >
              <div className="card">
                <div className={`card-header bg-${getCourseColor(index)}`}>
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
                <button
                  className="btn btn-dark ms-2 me-2 mb-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ms-2 me-2 mb-2"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function getCourseColor(index) {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];
  return colors[index % colors.length];
}

function Buttons({ course, deleteCourse, setCourse }) {
  return (
    <>
      <button
        className="btn btn-dark mb-2 me-2"
        onClick={(event) => {
          event.preventDefault();
          setCourse(course);
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-light mb-2 me-2"
        onClick={(event) => {
          event.preventDefault();
          deleteCourse(course._id);
        }}
      >
        Delete
      </button>
    </>
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
  } else if (month >= 9 && month <= 12) {
    return `Fall ${year} Semester`;
  }

  return "";
}

export default Dashboard;
