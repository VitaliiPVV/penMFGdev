import React from 'react';

const DropdownIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 8"
      fill="none"
      className={className}
    >
      <title>Dropdown icon</title>
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default DropdownIcon;