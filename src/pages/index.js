import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

// Site sections
import About from '../components/About';
import Experience from '../components/Experience';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Experience />
  </Layout>
);

export default IndexPage;
