import "./Left.css";
import ImgRef from "./../../../assets/medias/img-ref.json"

const Left = (props) => {
  const color = props.color;
  return (
    <div className="left">
      <p className="left-text">
      AirPods Max combine a custom acoustic design, H1 chips, and advanced software to power computational audio for a breakthrough listening experience with Adaptive EQ, Active Noise Cancellation, Transparency mode, and spatial audio.
      </p>
      <img src={ImgRef[color].front} alt="side-pic" />
    </div>
  );
};

export default Left;
