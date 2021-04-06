import { Link } from "react-router-dom";
import "./TrainNav.css";
import { useState } from "react";

const TrainNav = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            marginLeft: "30px",
          }}
        >
          <li style={{ listStyle: "none" }} onClick={() => setSelectIndex(0)}>
            <Link
              to="/popular?type=all"
              style={{ textDecoration: "none" }}
              className={selectIndex === 0 ? "SelectNav" : "UnselectNav"}
            >
              Popular
            </Link>
            <div className="underline-bar" />
          </li>
          <li
            style={{ marginLeft: 10, listStyle: "none" }}
            onClick={() => setSelectIndex(1)}
          >
            <Link
              to="/battle"
              style={{ textDecoration: "none" }}
              className={selectIndex === 1 ? "SelectNav" : "UnselectNav"}
            >
              Battle
            </Link>
            <div className="underline-bar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default TrainNav;
