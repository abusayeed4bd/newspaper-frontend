import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategorySkeleton from '../../SkeletonAnimation/CategorySkeleton';

const NationalPage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/news/national")
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return [1, 2, 3, 4].map(n => <CategorySkeleton />);
    }
    return (
        <div className='px-24 '>
            <h2 className="text-2xl font-semibold py-2 text-center">National</h2>
            <div className="grid lg:grid-cols-4 gap-2">
                {
                    [...news]?.reverse().map(n => <div className="card card-compact border p-2  bg-base-100 rounded-none">
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

export default NationalPage;