'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Courses from './components/Courses';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading((prev) => !prev);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Traversy Media</h1>
      {/* @ts-expect-error Server Component */}
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
