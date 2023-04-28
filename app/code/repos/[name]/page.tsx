import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import Link from 'next/link';

interface propTypes {
  params: { name: string };
}

const RepoPage = ({ params: { name } }: propTypes) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      {/* @ts-expect-error Server Component */}
      <Repo name={name} />
      {/* @ts-expect-error Server Component */}
      <RepoDirs />
    </div>
  );
};

export default RepoPage;
