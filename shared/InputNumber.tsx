import React from 'react';
type Props = {
  value: number;
  onChange: (vl: number) => void;
  disabled?: boolean;
};

const InputNumber = ({ value, onChange, disabled }: Props) => {
  function handleChange(e: any) {
    const vl = Number(e.target.value);
    onChange?.(vl);
  }

  return (
    <div className="flex items-center">
      <input
        inputMode="tel"
        pattern="^[0-9]*"
        type="number"
        disabled={disabled}
        onChange={handleChange}
        placeholder="1"
        value={value === 0 ? '' : value}
        className="w-16 h-10 lg:h-14 lg:pl-4 text-2xl font-bebasNeue text-center rounded-l rounded-r-none outline-none disabled:bg-gray-200"
      />
    </div>
  );
};

export default InputNumber;
