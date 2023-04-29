'use client';
import { useState } from 'react';

const CourseSearch = () => {
  const [query, setQuery] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <form onSubmit={handleSubmit} className='serch-form'>
      <input
        type='text'
        className='serch-input'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
