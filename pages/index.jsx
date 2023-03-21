import Head from "next/head";

import { getPosts } from "../services";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import FeaturedPost from "../sections/FeaturedPost";

const Home = ( {posts} ) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Jingyang's Blog</title>
        <link rel="icon" href="/logo.PNG" />
      </Head>
        <FeaturedPost />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
