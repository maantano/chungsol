import { Link } from "react-router-dom";
import "./GNB.css";

function Gnb() {
  const menuList = [
    { name: "Home", link: `${process.env.PUBLIC_URL}/` },
    { name: "센터소개", link: `${process.env.PUBLIC_URL}/introduce` },
    { name: "방문재가", link: `${process.env.PUBLIC_URL}/center` },
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
