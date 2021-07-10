import React from 'react';

export default function Input(props) {
  const {label, placeholder, type = 'text', requiredIcon = true} = props;
  return (
    <div className="mb-3 space-y-2 w-full text-base">
      <label className="font-semibold text-gray-600 py-2">
        {label} <abbr title="required">{requiredIcon && '*'}</abbr>
      </label>
      <input
        placeholder={placeholder}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
        type={type}
      />
    </div>
  );
}
