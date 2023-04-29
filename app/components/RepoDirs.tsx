import Link from 'next/link';

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`,
    { next: { revalidate: 60 } }
  );

  const contents = await response.json();

  return contents;
}
interface contentProp {
  type: string;
}

interface dirProp {
  path: string;
  name: string;
}

const RepoDirs = async ({ name }: { name: string }) => {
  const contents: [] = await fetchRepoContents(name);
  const dirs = contents.filter(
    (content: contentProp) => content.type === 'dir'
  );

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: dirProp) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
