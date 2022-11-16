import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Feature1Skeleton from './../../../SkeletonAnimation/Feature1Skeleton';

const Feature1 = () => {
    const [news, setNews] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })

    }, [])
    if (loading) {
        return <Feature1Skeleton />;
    }


    if (news) {
        const feature = news[news.length - 1];



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