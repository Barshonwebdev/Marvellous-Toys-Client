import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';

const Home = () => {
    return (
        <div>
            <p>z</p>
            <Helmet>
                <title>{titles.home}</title>
            </Helmet>
        </div>
    );
};

export default Home;