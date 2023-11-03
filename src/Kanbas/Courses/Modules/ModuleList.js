/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ModuleButtons from "./ModuleButtons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  //   const [modules, setModules] = useState(db.modules);
  //   const [module, setModule] = useState({
  //     name: "New Module",
  //     description: "New Description",
  //     course: courseId,
  //   });
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  //   const addModule = (module) => {
  //     setModules([
  //       { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //     ]);
  //   };
  //   const deleteModule = (moduleId) => {
  //     setModules(modules.filter((module) => module._id !== moduleId));
  //   };
  //   const updateModule = () => {
  //     setModules(
  //       modules.map((m) => {
  //         if (m._id === module._id) {
  //           return module;
  //         } else {
  //           return m;
  //         }
  //       })
  //     );
  //   };

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

          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
        </li>

        {modules.map((module, index) => (
          <li key={index} className="list-group-item kanbas-module-padding">
            <div>
              <button
                className="btn btn-danger float-end mt-1"
                onClick={() => dispatch(deleteModule(module._id))}
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
