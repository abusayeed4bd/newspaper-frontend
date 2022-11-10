import React from 'react';
import Feature1 from './HomeSections/Feature1';
import './Home.css'
import Features2 from './HomeSections/Features2';
import International from './HomeSections/International';

const Home = () => {
    return (
        <div className=' md:px-24 pt-2 '>
            <div className="feature-post  grid grid-cols-1 lg:grid-cols-2">
                <div className='m-2'><Feature1 /></div>
                <div className='m-2'> <Features2 /></div>
            </div>


            <section className='pt-3 flex gap-2'>
                <div className='lg:w-50'>
                    <h2 className="text-2xl font-semibold">National</h2>
                    <hr />
                    <International />
                </div>
                <div className='lg:w-50'>
                    <h2 className="text-2xl font-semibold">International</h2>
                    <hr />
                    <International />
                </div>
            </section>
        </div>


    );
};

export default Home;