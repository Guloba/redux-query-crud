import React, { useState } from 'react';
import { useAddPostMutation } from '../api/posts';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && author) {
      await addPost({ title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
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
          {isLoading ? 'Adding...' : 'Add Post'}
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;
