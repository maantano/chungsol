import { Link } from "react-router-dom";
import "./GNB.css";

function Gnb() {
  const menuList = [
    { name: "훔", link: "/" },
    { name: "센터소개", link: "/introduce" },
    { name: "노인장기요양보험", link: "/center" },
    { name: "노인돌봄서비스", link: "/center2" },
    { name: "이용안내", link: "/process" },

    // { name: "복지용품", link: "/goods" },
  ];
  return (
    <ul className="GNB">
      {menuList.map(({ name, comment, link }, index) => (
        <li key={index}>
          <Link to={link}>
            {name}
            {comment && <span>{comment}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Gnb;
