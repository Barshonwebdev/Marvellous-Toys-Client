import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';

const Blogs = () => {
    return (
        <div>
            <p>blogs</p>
            <Helmet>
                <title>
                    {titles.blogs}
                </title>
            </Helmet>
        </div>
    );
};

export default Blogs;