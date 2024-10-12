import React from 'react';

export const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold text-white transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    ref={ref}
    {...props}
  />
));

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-xl font-semibold ${className}`}>
    {children}
  </h2>
);