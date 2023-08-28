import './App.css';
import React from 'react';
import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Redux Query CRUD App</h1>
      </header>
      <main>
        <PostList />
        <AddPostForm />
      </main>
    </div>
  );
}

export default App;
