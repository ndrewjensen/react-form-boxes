import React, { useState } from "react";

function NewBoxForm({addBox}){

  const initialState = { width: "", height: "", color: "" };

  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt){
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }))
  }

  return(
    <form onSubmit={handleSubmit}>
    <label htmlFor="width">width:</label>
    <input
      type="number"
      id="width"
      name="width"
      value={formData.width}
      onChange={handleChange}
    />

    <label htmlFor="height">height:</label>
    <input
      type="number"
      id="height"
      name="height"
      value={formData.height}
      onChange={handleChange}
    />

    <label htmlFor="color">color:</label>
    <input
      id="color"
      name="color"
      value={formData.color}
      onChange={handleChange}
    />

    <button>Add a new box!</button>
  </form>
  )
}

export default NewBoxForm