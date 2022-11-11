import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Feature1 = () => {
    const [news, setNews] = useState();


    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(res => res.json())
            .then(data => setNews(data))

    }, [])



    if (news) {
        const feature = news[0];



        return (
            <div>
                <div className="card  lg:h-[410px] relative  bg-base-100 shadow-xl image-full rounded-none">
                    <figure><img src={feature.image} alt="Shoes" /></figure>
                    <div className="card-body !absolute bottom-0 p-1 !text-white">
                        <Link to={`/news/${feature._id}`} className="card-title hover:underline">{feature.title}</Link>


                    </div>
                </div>
            </div>
        );
    }
};

export default Feature1;