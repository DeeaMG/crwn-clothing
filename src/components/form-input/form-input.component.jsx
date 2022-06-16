import "./form-input.styles.scss";
import { useState } from "react";

function FormInput({ label, ...otherProps }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="group">
      {label && (
        <label
          htmlFor={otherProps.id}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
}

export default FormInput;
