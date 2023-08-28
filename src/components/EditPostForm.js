import React, { useState } from 'react';
import { useUpdatePostMutation } from '../api/posts';

function EditPostForm({ post }) {
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);

  const [updatePost, { isLoading }] = useUpdatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && author) {
      await updatePost({ id: post.id, title, author });
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Post'}
        </button>
      </form>
    </div>
  );
}

export default EditPostForm;
