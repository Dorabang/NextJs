import Link from 'next/link';

interface courseType {
  id: number;
  title: string;
  level: string;
  description: string;
  link: string;
}

const Courses = ({ courses }: { courses: [] }) => {
  return (
    <div className='courses'>
      {courses.map((course: courseType) => (
        <div key={course.id} className='card'>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target='_blank' className='btn'>
            강의 듣기
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
