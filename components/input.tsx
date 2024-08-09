import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative ">
      <input
        type="text"
        id={id}
        onChange={onChange}
        value={value}
        typeof={type}
        className="block  rounded-xl px-5 pt-3 pb-2 w-full text-base text-white bg-neutral-600 focus:outline-none focus:ring-0"
      />
      <label
      className=" absolute text-base z-10 left-3 text-zinc-50 top-[-25px]"
       htmlFor={id}
      >{label}</label>
    </div>
  );
};

export default Input;
