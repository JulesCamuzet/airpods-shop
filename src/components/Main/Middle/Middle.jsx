import "./Middle.css";
import ImgRef from "../../../assets/medias/img-ref.json";
import ColorSelector from "./ColorSelector/ColorSelector";

const Middle = (props) => {
  const color = props.color;
  const setColor = props.setColor;
  return (
    <div className="middle">
      <ColorSelector setColor={setColor} color={color} />
      <img src={ImgRef[color].person} alt="person-pic" className="person" />
      <div className="side-pic-container">
        <img src={ImgRef[color].side} alt="" className="side-pic" />
      </div>
    </div>
  );
};

export default Middle;
