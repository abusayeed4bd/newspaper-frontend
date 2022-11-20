import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategorySkeleton from '../../../SkeletonAnimation/CategorySkeleton';

const National = () => {
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
        <div>
            {
                [...news].reverse().slice(0, 4).map(n => <>

                    <div className='flex my-2 border-b border-dotted pb-1'>
                        <div className='w-[30%] mr-2'>
                            <img className='w-[200px] h-[100px]' src={n.image} alt="" />
                        </div>
                        <div className='w-[70%]'>
                            <Link to={`news/${n._id}`} className='text-lg font-medium hover:underline'>{n.title}</Link>

                        </div>
                    </div>
                </>)
            }

        </div>
    );
};

export default National;