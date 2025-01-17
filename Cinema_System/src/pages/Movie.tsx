import React from 'react';
import Layout from '../components/Layout';

const Movie: React.FC = () => {
    return (
        <Layout>
            <div className='movie-page'>
                <h1>Movie Page</h1>
                <p>This is the movie page</p>
            </div>
        </Layout>
    );
};

export default Movie;