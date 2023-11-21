import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';

const MyFigurines = () => {
    return (
        <div>
            my
            <Helmet>
                <title>
                    {titles.my}
                </title>
            </Helmet>
        </div>
    );
};

export default MyFigurines;