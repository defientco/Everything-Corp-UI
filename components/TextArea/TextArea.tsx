import { FC, useState } from 'react';

interface TextAreaProps {
  value: string;
  label: string;
  setValue: (value: string) => void;
}
const TextArea: FC<TextAreaProps> = ({ value, label, setValue }) => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <div className="justify-center w-full h-full px-4 mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="inline-block mb-2 text-gray-700 form-label"
        >
          {label}
        </label>
        <textarea
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="form-textarea"
          rows={3}
          placeholder={label}
          onChange={handleChange}
          value={value}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
