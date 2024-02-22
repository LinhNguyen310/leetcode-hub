import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Example: Using Font Awesome icons

const topics = [
  "Array", "String", "Hash Table", "Dynamic Programming", "Math",
  "Sorting", "Greedy", "Depth-First Search", "Binary Search", "Database",
  "Breadth-First Search", "Tree", "Matrix", "Two Pointers", "Bit Manipulation",
  "Binary Tree", "Heap (Priority Queue)", "Stack", "Prefix Sum", "Simulation",
  "Graph", "Design", "Counting", "Sliding Window", "Backtracking", "Union Find",
  "Enumeration", "Linked List", "Ordered Set", "Monotonic Stack", "Number Theory",
  "Trie", "Divide and Conquer", "Recursion", "Bitmask", "Queue", "Binary Search Tree",
  "Segment Tree", "Memoization", "Geometry", "Binary Indexed Tree", "Hash Function",
  "Topological Sort", "Combinatorics", "String Matching", "Shortest Path", "Rolling Hash",
  "Game Theory", "Data Stream", "Interactive", "Brainteaser", "Monotonic Queue",
  "Randomized", "Merge Sort", "Iterator", "Concurrency", "Doubly-Linked List",
  "Probability and Statistics", "Quickselect", "Bucket Sort", "Suffix Array",
  "Minimum Spanning Tree", "Counting Sort", "Shell", "Line Sweep", "Reservoir Sampling",
  "Strongly Connected Component", "Eulerian Circuit", "Radix Sort", "Rejection Sampling",
  "Biconnected Component"
];

const generateTags = () => {
  const tags = [];
  for (let i = 0; i < topics.length; i++) {
    tags.push({ name: topics[i], icon: <FontAwesomeIcon icon="tag" /> });
  }
  return tags;
};

const tagList = generateTags();

const TagContainer = () => {
  const [tagsPerPage, setTagsPerPage] = useState(5); // Number of tags to display per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const numTagsPerPage = window.innerWidth >= 768 ? 5 : 3; // Adjust this threshold as needed
      setTagsPerPage(numTagsPerPage);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalPages = Math.ceil(tagList.length / tagsPerPage);

  const indexOfLastTag = currentPage * tagsPerPage;
  const indexOfFirstTag = indexOfLastTag - tagsPerPage;
  const currentTags = tagList.slice(indexOfFirstTag, indexOfLastTag);

  const nextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1); // Go back to the first page
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
  };

  return (
    <div className="relative flex items-center"> {/* Wrap buttons and tags in the same flex container */}

      <div className="mt-5 mb-5 flex"> {/* Flex container for tags */}
        {currentTags.map((tag, index) => (
          <React.Fragment key={index}>
            <Tag name={tag.name} icon={tag.icon} />
            {index !== currentTags.length - 1 && <div className="mr-1.2" />} {/* Add margin between tags */}
          </React.Fragment>
        ))}
      </div>
      {currentPage !== totalPages ? (
        <button className="absolute right-0" onClick={nextPage} disabled={tagList.length <= tagsPerPage}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
          </svg>
        </button>
      ) : (
        <button className="absolute right-0" onClick={nextPage} disabled={tagList.length <= tagsPerPage}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
          </svg>
        </button>
      )}

    </div>
  );
};

export default TagContainer;
