import React from 'react';
import Layout from '../components/containers/Layout';
import Button from '../components/common/Button';
// import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-5 m-auto w-full md:w-80">
        <Button href="/new-round">New Round</Button>
        <Button href="/round">Load Round</Button>
        <Button href="/help">Help</Button>
        <Button href="/settings">Settings</Button>
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
