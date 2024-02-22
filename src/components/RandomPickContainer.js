import React from 'react';

const RandomPickContainer = () => {
  return (
    <div className="">
      <button className="items-center p-3 flex overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 max-w-xs">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" className="h-[18px] w-[18px] stroke-current text-green-60">
          <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.398 18.296H5.38a3.6 3.6 0 002.93-1.508l1.023-1.433m11.522-9.71h-2.98a3.6 3.6 0 00-2.93 1.507l-1.146 1.603m5.298-5.747l2.502 2.636-2.502 2.637m0 7.438l2.502 2.636-2.502 2.637M2.398 6.052H5.38a3.6 3.6 0 012.93 1.507l6.635 9.289a3.6 3.6 0 002.93 1.507h2.98"></path>
        </svg>
        <p className="text-green ml-1 flex-grow whitespace-nowrap">Pick one</p>
      </button>
    </div>
  );
};

export default RandomPickContainer;
