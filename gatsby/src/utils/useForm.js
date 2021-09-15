import { useState } from "react";

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // Check if its a number and convert
    let value = e.target.value;
    if (e.target.type === "number") {
      value = parseInt(value);
    }
    setValues({
      // Copy the existing values into it
      ...values,
      // Update the new value that changes
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
