import Box from "./Box";
import { useState } from "react";

function BoxList() {
  const { boxes, setBoxes } = useState([]);

  function addBox({ width, height, color }) {
    const newBox = { width, height, color };
    setBoxes(...boxes, newBox);
  }

  function removeBox(key) {
    setBoxes(boxes.filter((box) => box.key !== key));
  }
  
  return (
    <div className="BoxList">
      {boxes.map((box) => 
        <div>
          <Box width={box.width} height={box.height} color={box.color}/>
        </div>
      )}
    </div>
  );
}

export default BoxList;
