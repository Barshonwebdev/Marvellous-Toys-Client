import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';

const AllFigurines = () => {
    return (
        <div>
            all
            <Helmet>
                <title>{titles.all}</title>
            </Helmet>
        </div>
    );
};

export default AllFigurines;