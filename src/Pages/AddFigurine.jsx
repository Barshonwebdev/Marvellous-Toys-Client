import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';

const AddFigurine = () => {
    return (
        <div>
            add
            <Helmet>
                <title>{titles.add}</title>
            </Helmet>
        </div>
    );
};

export default AddFigurine;