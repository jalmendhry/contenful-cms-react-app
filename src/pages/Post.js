import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { client } from '../client';
import { Redirect, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Post = () => {
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    // Get data from CMS
    client
      .getEntries({
        content_type: 'post',
        'fields.slug[in]': slug,
      })
      .then(({ items }) => {
        const { fields } = items[0];
        const { title, content } = fields;
        setPost({
          title,
          content,
        });
      })
      .catch(() => {
        setError(true);
      });
  }, [slug]);

  if (error) {
    return <Redirect to="/404" />;
  }

  if (!post) {
    return <p>loading..</p>;
  }

  const { content } = post;
  return (
    <Layout>
      <div className="post">
        <h2>Blog</h2>
        {documentToReactComponents(content)}
      </div>
    </Layout>
  );
};

export default Post;
