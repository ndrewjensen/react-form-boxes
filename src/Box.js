import NewBoxForm from './NewBoxForm'


function Box({box, removeBox}){
  const {width, height, color, id} = box;
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color
  }

  return(
    <div>
      <div style={styles}></div>
      <button onClick={evt => removeBox(id)}>x</button>
    </div>
  )
}
//QUESTION:background-color syntax
// style={`width:${box.width} height:${box.height} background-color:${box.color}`}

export default Box