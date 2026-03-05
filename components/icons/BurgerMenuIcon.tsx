import React from 'react';

const BurgerMenuIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 33"
      fill="none"
      className={className}
    >
      <title>Burger menu icon</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M5.3335 7.16666H26.6668M5.3335 16.5H26.6668M5.3335 25.8333H26.6668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default BurgerMenuIcon;