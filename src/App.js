import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: 'post' })
      .then(({ items }) => {
        setPosts(items);
        console.log(items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="">
      <header className="">
        <nav>{/* <a href="" */}</nav>
        <p>My Blog</p>
        <p>{posts.length}</p>
      </header>
    </div>
  );
};

export default App;
