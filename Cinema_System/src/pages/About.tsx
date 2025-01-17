import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
    return (
        <Layout>
            <div className='about-page'>
                <h1>About Page</h1>
                <p>This is the about page</p>
            </div>
        </Layout>
    );
};

export default About;