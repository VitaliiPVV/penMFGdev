import React from 'react';

const UploadIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="currentColor"
      className={className}
    >
      <title>Upload icon</title>
      <path d="M5.33366 8.66669V3.23335L3.60033 4.96669L2.66699 4.00002L6.00033 0.666687L9.33366 4.00002L8.40033 4.96669L6.66699 3.23335V8.66669H5.33366ZM2.00033 11.3334C1.63366 11.3334 1.31977 11.2028 1.05866 10.9417C0.797548 10.6806 0.666992 10.3667 0.666992 10V8.00002H2.00033V10H10.0003V8.00002H11.3337V10C11.3337 10.3667 11.2031 10.6806 10.942 10.9417C10.6809 11.2028 10.367 11.3334 10.0003 11.3334H2.00033Z" />
    </svg>
  );
};

export default UploadIcon;