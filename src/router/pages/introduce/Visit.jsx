import React from "react";
import { Link } from "react-router-dom";

const Visit = () => {
  return (
    <div>
      {" "}
      <div className="depth3">
        <div className="subject">
          <ul className="clear itemList3">
            <li>
              <Link to="/center" className="on">
                방문간호
              </Link>
            </li>
            <li>
              <Link to="/center2">방문요양</Link>
            </li>
            <li>
              <Link to="/center3">가족요양</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visit;
