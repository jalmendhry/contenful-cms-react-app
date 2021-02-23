import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Redirect, useParams, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import { client } from '../client';

import './pages.css';

const Page = () => {
  const { slug } = useParams();
  const [error, setError] = useState(false);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getPageData = async () => {
      client
        .getEntries({ content_type: 'page', 'fields.slug[in]': slug })
        .then(({ items }) => {
          const { fields } = items[0];
          console.log(fields);
          setPageData(fields);
        })
        .catch(() => {
          setError(true);
        });
    };

    if (slug !== '404') {
      setError(false);
      getPageData();
    }
  }, [slug]);

  if (error) {
    return <Redirect to="/404" />;
  }

  const { pageTitle, mainContent, carousel, contentRow } = pageData;
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Layout>
        {carousel && carousel.length > 0 && (
          <Carousel>
            {carousel.map(({ fields }, index) => {
              const { file, description } = fields;
              return (
                <div key={index}>
                  <img src={`https:${file.url}`} alt=""></img>
                  <p className="legend">{description}</p>
                </div>
              );
            })}
          </Carousel>
        )}
        <div className="content-wrapper">
          {documentToReactComponents(mainContent)}
        </div>

        {contentRow &&
          contentRow.map(({ fields }, index) => {
            const { content, image } = fields;

            return (
              <div className="content-row" key={index}>
                <img src={`https://${image.fields.file.url}`} alt="" />
                <div className="content-wrapper">
                  {documentToReactComponents(content)}
                </div>
              </div>
            );
          })}
      </Layout>
    </>
  );
};

export default withRouter(Page);
