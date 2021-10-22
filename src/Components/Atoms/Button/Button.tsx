import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  primary?: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  icon,
  text,
  ...attributes
}): JSX.Element => {
  const isPrimary = primary ? "bg-green-600 hover:bg-green-800 text-white" : "bg-white hover:bg-gray-50 text-gray-700";
  return (
    <button
      className={`${isPrimary} inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
      {...attributes}>
      {icon}
      <span className="mx-2 font-semibold">{text}</span>
    </button>
  );
};

export default Button;

