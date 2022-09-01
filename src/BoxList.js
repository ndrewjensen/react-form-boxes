import Box from "./Box";
import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";

function BoxList() {
  const [ boxes, setBoxes ] = useState([]);

  function addBox({ width, height, color }) {
    const newBox = { width, height, color , id: uuid()};
    setBoxes([...boxes, newBox]);
  }

  function removeBox(id) {
    console.log("id ", id);
    setBoxes(boxes.filter((box) => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
    <ul>
      {boxes.map(box => (
        <li key={box.id}>
          <Box box={box} removeBox={removeBox}/>
        </li>
    ))}
    </ul>
    </div>
  );
}

export default BoxList;
