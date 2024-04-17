import { PostCard } from "@/components/PostCard/PostCard";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
export default async function PostPage() {
  const posts = await fetchPosts();
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl mb-4 text-center mx-auto">Posts</h1>
      <div className="grid grid-cols-3 gap-4 mx-auto ">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
