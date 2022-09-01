
/** Box UI
 *
 * Props:
 * - box {width,height,color,id}
 * - removeBox function
 * 
 * State: None
 *
 * BoxList -> Box
 */

function Box({ box, removeBox }) {
  const { width, height, color, id } = box;
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
  };

  return (
    <div className="Box">
      <div style={styles}></div>
      <button 
          className="Box-removeBox" 
          onClick={(evt) => removeBox(id)}>
        X
      </button>
    </div>
  );
}

export default Box;
