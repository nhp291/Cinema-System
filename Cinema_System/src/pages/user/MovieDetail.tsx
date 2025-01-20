import React from "react";
import Layout from "../../containers/Layout_User";

const MovieDetail: React.FC = () => {
    return (
        <Layout>
            <div className='movie-detail-page'>
                <h1>Movie Detail Page</h1>
                <p>This is the movie detail page</p>
            </div>
        </Layout>
    );
};

export default MovieDetail;