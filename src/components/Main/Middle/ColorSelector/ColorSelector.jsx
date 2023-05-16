import './ColorSelector.css'

const ColorSelector = (props) => {
  const setColor = props.setColor;

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
      <div className="selector-button pink" onClick={handlePinkClick}></div>
      <div className="selector-button green" onClick={handleGreenClick}></div>
      <div className="selector-button silver" onClick={handleWhiteClick}></div>
    </div>
  )
}


export default ColorSelector;