// @ts-nocheck
import * as React from "react";

// Mock API call to fetch posts
const fetchPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
        { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
      ]);
    }, 2000);
  });
};

export default async function PostFeed () {
    const posts = await fetchPosts();

    if(!posts) {
        return (
            <h3>No posts...</h3>
        )
    }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id} className="mb-4 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

