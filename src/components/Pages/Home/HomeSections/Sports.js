import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategorySkeleton from './../../../SkeletonAnimation/CategorySkeleton';
import CategoryPageSkeleton from './../../../SkeletonAnimation/CategoryPageSkeleton';

const Sports = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/news/sports")
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <CategoryPageSkeleton />;
    }
    return (
        <div>
            <div className="grid lg:grid-cols-4 gap-2">
                {
                    [...news]?.reverse().slice(0, 4).map(n => <div className="card card-compact  p-2  bg-base-100 rounded-none">
                        <figure><img className='h-[200px] w-[400px]' src={n.image} alt="Shoes" /></figure>
                        <div className="">
                            <Link to={`/news/${n._id}`} className="text-lg hover:underline">{n.title}</Link>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Sports;