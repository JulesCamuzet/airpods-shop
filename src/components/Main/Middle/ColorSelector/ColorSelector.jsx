import './ColorSelector.css'

const ColorSelector = (props) => {
  const setColor = props.setColor;
  const color = props.color;

  const handleGreenClick = () => {
    setColor("green");
  }

  const handlePinkClick = () => {
    setColor("pink");
  }
  const handleWhiteClick = () => {
    setColor("white");
  }
  return (
    <div className="color-selector">
      <div className={color == "pink" ? "selector-button pink active" : "selector-button pink"} onClick={handlePinkClick}></div>
      <div className={color == "green" ? "selector-button green active" : "selector-button green"} onClick={handleGreenClick}></div>
      <div className={color == "white" ? "selector-button silver active" : "selector-button silver"} onClick={handleWhiteClick}></div>
    </div>
  )
}


export default ColorSelector;