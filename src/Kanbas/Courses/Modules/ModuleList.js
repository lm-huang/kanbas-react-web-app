/** @format */

// import React, { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import ModuleButtons from "./ModuleButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    client.updateModule(module).then((status) => {
      dispatch(updateModule(module));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);
  return (
    <div>
      <ModuleButtons />
      <br />
      <br />
      <ul className="list-group">
        <li
          className="list-group-item"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <input
            className="form-control me-2"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control me-2"
            style={{ height: "2rem" }}
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>

          <button className="btn btn-success me-2" onClick={handleAddModule}>
            Add
          </button>
        </li>

        {modules.map((module, index) => (
          <li key={index} className="list-group-item kanbas-module-padding">
            <div>
              <button
                className="btn btn-danger float-end mt-1"
                onClick={() => handleDeleteModule(module._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-success float-end mt-1 me-2"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <b>{module.name}</b>
              <br />
              {module.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
