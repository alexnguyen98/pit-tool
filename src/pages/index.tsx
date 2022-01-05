import React from 'react';
import Layout from '../components/containers/Layout';
import Button from '../components/common/Button';
import Github from '../components/icons/Github';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-5 m-auto w-full md:w-80">
        <Button href="/new-round">New Round</Button>
        <Button href="/round">Load Round</Button>
      </div>
      <footer className="flex justify-center py-3 text-accent-3">
        <a href="https://github.com/alexnguyen98/pit-tool" className="flex items-center">
          <Github className="w-4 mr-1 fill-current" />
          Github
        </a>
      </footer>
    </Layout>
  );
};

export default Home;
