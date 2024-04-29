import { useState } from "react";

interface InputProps {
  value: string;
  onChange: () => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
