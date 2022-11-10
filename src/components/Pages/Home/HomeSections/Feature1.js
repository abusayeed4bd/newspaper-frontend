import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Feature1 = () => {
    // const [news, setNews] = useState();


    // useEffect(() => {
    //     fetch("fakedata.json")
    //         .then(res => res.json())
    //         .then(data => setNews(data))

    // }, [])

    const { data: news, isLoading } = useQuery('products', () => fetch('fakedata.json')
        .then(res => res.json()))

    if (isLoading) {
        return "Loading";
    }

    const feature = news[0];


    return (
        <div>
            <div className="card  lg:h-[410px] relative  bg-base-100 shadow-xl image-full rounded-none">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body !absolute bottom-0 !text-white">
                    <h2 className="card-title">shoes does he choose?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Feature1;