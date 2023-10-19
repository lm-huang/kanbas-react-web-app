/** @format */

import { Link, useLocation } from "react-router-dom";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";

function KanbasNavigation() {
  const baseUrl = "#/Kanbas";
  const links = [
    {
      name: "Account",
      url: `${baseUrl}/Account`,
      iconClass: "fa fa-user kanbas-gray",
    },
    {
      name: "Dashboard",
      url: `${baseUrl}/Dashboard`,
      iconClass: "fa fa-clock kanbas-red",
    },
    {
      name: "Courses",
      url: `${baseUrl}/Courses`,
      iconClass: "fa fa-book kanbas-red",
    },
    {
      name: "Calendar",
      url: `${baseUrl}/Calendar`,
      iconClass: "fa fa-calendar kanbas-red",
    },
    {
      name: "History",
      url: `${baseUrl}/History`,
      iconClass: "fa fa-stopwatch kanbas-red",
    },
    {
      name: "Help",
      url: `${baseUrl}/Help`,
      iconClass: "fa fa-question-circle kanbas-red",
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="list-group kanbas-sidebar kanbas-column">
      <a class=" kanbas-sidebar-unselected kanbas-icon-padding">
        <div class="kanbas-sidebar-text kanbas-sidebar-logo">
          <img
            src="https://brand.northeastern.edu/wp-content/uploads/2022/06/ac-grid-6-white.svg"
            width="180px"
          />
        </div>
      </a>

      {links.map((link) => (
        <KanbasModules modules={link} pathname={pathname} key={link.name} />
      ))}
    </div>
  );
}

function KanbasModules({ modules, pathname }) {
  return (
    <a
      href={`${modules.url}`}
      className={`kanbas-no-underline ${
        pathname.includes(modules.name)
          ? "kanbas-sidebar-selected"
          : "kanbas-sidebar-unselected"
      } kanbas-icon-padding`}
    >
      <i className={`${modules.iconClass}`}></i>
      <br />
      <div className="kanbas-sidebar-text">{modules.name}</div>
    </a>
  );
}
export default KanbasNavigation;
