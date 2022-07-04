import React from "react";

const Spinner = () => {
  return (
    <div className="mt-10 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="64px"
        height="64px"
        viewBox="0 0 128 128"
      >
        <g>
          <circle cx="16" cy="64" r="16" fill="#000000" />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#555555"
            transform="rotate(45,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#949494"
            transform="rotate(90,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#cccccc"
            transform="rotate(135,64,64)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
            calcMode="discrete"
            dur="720ms"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
