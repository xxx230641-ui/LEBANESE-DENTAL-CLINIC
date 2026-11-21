import React from 'react';

interface ClinicLogoProps {
  name?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md';
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  name,
  showWordmark = true,
  size = 'sm',
}) => {
  const iconDim = size === 'md' ? 36 : 30;

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width={iconDim}
        height={iconDim}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="goldToothGrad" x1="4" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5D782" />
            <stop offset="50%" stopColor="#E9BA4A" />
            <stop offset="100%" stopColor="#B88728" />
          </linearGradient>
        </defs>
        <path
          d="M13.5 9.5C10.2 9.5 8 12.1 8 15.6C8 19.8 9.9 24.4 11.4 28.8C12.2 31.2 14.1 31.6 15.2 29.2L17.1 24.8C17.8 23.3 18.8 22.5 20 22.5C21.2 22.5 22.2 23.3 22.9 24.8L24.8 29.2C25.9 31.6 27.8 31.2 28.6 28.8C30.1 24.4 32 19.8 32 15.6C32 12.1 29.8 9.5 26.5 9.5C24.2 9.5 22.6 10.6 20 10.6C17.4 10.6 15.8 9.5 13.5 9.5Z"
          stroke="url(#goldToothGrad)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 14.5C12.5 20.5 23.5 27.5 34.5 24"
          stroke="url(#goldToothGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {showWordmark && name && (
        <span className="font-display text-lg sm:text-xl font-medium tracking-wide text-[#F9F6EE]">
          {name}
        </span>
      )}
    </span>
  );
};
