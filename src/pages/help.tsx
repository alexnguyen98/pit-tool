import React from 'react';
import Accordion from '../components/common/Accordion';
import Footer from '../components/layout/Footer';
import Layout from '../components/containers/Layout';

const Help: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-accent-6 font-bold text-center mb-4">Help page</h1>
      <div className="m-auto space-y-4 w-full md:w-auto">
        <Accordion header="Final scores explaination">
          <p className="font-bold text-green-700">Points</p>
          <p>Is the sum of correct choices / number of all correct choices</p>
          <br />
          <p className="font-bold text-red-700">Mistakes</p>
          <p>Is the sum of incorrect choices</p>
        </Accordion>
        <Accordion header="Results interpretation">
          <div className="bg-green-100 text-green-700 font-bold p-2 mb-1">Some answer, green bold with background </div>
          <p>Correct choice</p>
          <br />
          <div className="bg-red-100 text-red-900 p-2 mb-1">Some answer, red with background</div>
          <p>Missing correct choice</p>
          <br />
          <div className="text-red-700 font-bold p-2 mb-1 border border-accent-2">Some answer, bold red</div>
          <p>Incorrect choice</p>
          <br />
        </Accordion>
      </div>
      <Footer />
    </Layout>
  );
};

export default Help;
