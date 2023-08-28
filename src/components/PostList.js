import React from 'react';
import { useGetPostsQuery } from '../api/posts';
import { useGetCommentsQuery } from '../api/posts';
import AddPostForm from './AddPostForm';
import EditPostForm from './EditPostForm';

function PostList() {
    const { data: posts, error } = useGetPostsQuery();
    
    if (error) {
        console.error("Error fetching posts:", error);
        return <div>Error fetching posts</div>;
      }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
                <CommentList postId={post.id} />
                <EditPostForm post={post} />
          </li>
        ))}
          </ul>
          <AddPostForm />
    </div>
  );
}

function CommentList({ postId }) {
  const { data: comments } = useGetCommentsQuery();

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments
          .filter((comment) => comment.postId === postId)
          .map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
      </ul>
    </div>
  );
}

export default PostList;
