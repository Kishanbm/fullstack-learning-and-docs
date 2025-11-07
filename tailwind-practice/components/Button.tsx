
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  
   const baseStyle = "py-2 px-5 rounded-lg font-medium transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:shadow-lg active:scale-95";

  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200 text-white",
    secondary: "bg-white hover:bg-gray-50 hover:shadow-gray-200 text-blue-600 border border-blue-600 hover:border-blue-700",
  };

  const combinedClassName = `
    ${baseStyle}
    ${styles[variant]}
    ${className}
  `;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;