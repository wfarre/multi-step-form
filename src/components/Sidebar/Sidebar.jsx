import React, { useEffect, useState } from "react";

const Sidebar = ({ path, pagename }) => {
  const listSidebar = [
    {
      index: "1",
      step: "step 1",
      page: "info",
      title: "your info",
    },
    {
      index: "2",
      step: "step 2",
      page: "plan",
      title: "select plans",
    },
    {
      index: "3",
      step: "step 3",
      page: "addon",
      title: "add-ons",
    },
    {
      index: "4",
      step: "step 4",
      page: "summary",
      title: "summary",
    },
  ];

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    if (pagename !== undefined) {
      console.log(pagename[2]);
      setCurrentPage(pagename[2]);
    }
  }, [pagename]);

  return (
    <aside className="sidebar">
      <div className="sidebar__bg"></div>

      <ul className="sidebar__content">
        {listSidebar.map((item) => {
          return (
            <li key={item.index} className="sidebar__content__element">
              <span
                className={
                  currentPage === item.page
                    ? "sidebar__content__element__index selected"
                    : "sidebar__content__element__index"
                }
              >
                {item.index}
              </span>

              <span className="sidebar__content__element__sub">
                {item.step}
              </span>
              <p className="sidebar__content__element__txt">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
