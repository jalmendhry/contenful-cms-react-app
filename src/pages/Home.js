import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Layout from '../components/Layout';
// import PostList from '../components/PostList';
import './pages.css';

const Home = () => {
  return (
    <>
      <Layout>
        <h1>Homepage</h1>
      </Layout>
    </>
  );
};

export default Home;
