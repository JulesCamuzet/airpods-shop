import './Right.css'
import ImgRef from "../../../assets/medias/img-ref.json";


const Right = (props) => {
  const color = props.color;
  return (
    <div className="right">
      <img src={ImgRef[color].jack} alt="" />
    </div>
  )
}


export default Right;