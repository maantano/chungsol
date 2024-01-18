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
                노인장기요양보험
              </Link>
            </li>
            <li>
              <Link to="/center2">노인돌봄서비스</Link>
            </li>
            {/* <li>
              <Link to="/center3">노인돌봄서비스</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visit;
