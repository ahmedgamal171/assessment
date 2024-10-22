import logo from "./Images/Secondary Logo H.svg";
import frame from "./Images/Side Menu.png";
import "./SectionOne.css";
import scrollingicon from "./Images/Scrolling Animation.svg";
export default function SectionOne() {
  return (
    <div className="SectionOne">
      <div>
        <h1 style={{ position: "sticky", top: "0", margin: "0" }}>
          <img id="logo" src={logo} />
          <img id="sidemenu" src={frame} />
        </h1>
        <div id="SectionOneParagraphContainer">
          <p id="paragraph1">
            Make your furture so{" "}
            <span style={{ color: "orange" }}>Irresistble,</span>
            <br />
            it becomes<span style={{ color: "orange" }}> Inevitable.</span>
          </p>
          <p id="paragraph2">
            At Crete we plan,design and market
            <br />
            delightful digital products
          </p>
        </div>
      </div>
      <img id="scrollingicon" src={scrollingicon} />
    </div>
  );
}
