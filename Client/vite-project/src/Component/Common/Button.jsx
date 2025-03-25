import React from 'react';

function Button({ text, svg, className, onClick }) {
  return (
    <button
      type="submit"
      className={`${className} text-center text-white inline-flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800`}
      onClick={onClick} 
    >
      {svg}
      <span>{text}</span>
    </button>
  );
}

export default Button;
