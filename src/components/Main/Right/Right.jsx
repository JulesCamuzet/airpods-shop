import './Right.css'
import ImgRef from "../../../assets/medias/img-ref.json";


const Right = (props) => {
  const color = props.color;
  return (
    <div className="right">
      <img style={(color != "pink") ? {transform: "rotate(90deg) translateX(25%)"} : {}} src={ImgRef[color].jack} alt="" />
    </div>
  )
}


export default Right;