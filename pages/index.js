import Link from 'next/link'

export default function Home({ blog }) {
  return (
      <div>
        {blog.map(blog => (
            <ul key={blog.id}>
                <li>
                    <Link href={`blog/${blog.id}`}>
                        <a>{blog.title}</a>
                    </Link>
                </li>
            </ul>
        ))}
      </div>
  );
}

export const getStaticProps = async () => {
    const key = {
        headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch('https://m-y.microcms.io/api/v1/blogs', key)
    .then(res => res.json())
    .catch(() => null);

    return {
        props: {
            blog: data.contents,
        }
    }
}
