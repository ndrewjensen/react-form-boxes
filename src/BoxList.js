import Box from "./Box";
import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/** BoxList
 *
 * Props:
 * - None
 *
 * State: boxes [{id, width, height, color},...]
 *
 * BoxList -> Box
 * BoxList -> NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**   accept {width, height, color} and add to boxes state*/
  function addBox({ width, height, color }) {
    const newBox = { width, height, color, id: uuid() };
    setBoxes([...boxes, newBox]);
  }

  /**   accept unique box id and remove from from boxes state*/
  function removeBox(id) {
    setBoxes(boxes.filter((box) => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <ul>
        {boxes.map((box) => (
            <Box key={box.id} box={box} removeBox={removeBox} />
        ))}
      </ul>
    </div>
  );
}

export default BoxList;
