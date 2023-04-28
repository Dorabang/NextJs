import Link from 'next/link';

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`
  );

  const contents = await response.json();

  return contents;
}

const RepoDirs = async ({ name }: string) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter(
    (content: { content: [] }) => content.type === 'dir'
  );

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
