import React, { useState } from "react";

/** add boxes form
 *
 * props: addBox function
 *
 * state: formData: {height, width, color}
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { width: "", height: "", color: "" };

  const [formData, setFormData] = useState(initialState);

  /** form submit adds new box and resets form */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** maintains values in form inputs */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>

      <div>
      <label htmlFor="height">height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      </div>

      <div>
      <label htmlFor="color">color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      </div>

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
