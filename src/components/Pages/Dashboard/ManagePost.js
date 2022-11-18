import React, { useEffect, useState } from 'react';
import CategorySkeleton from './../../SkeletonAnimation/CategorySkeleton';
import { Link, useNavigate } from 'react-router-dom';
const ManagePost = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:5000/news")
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
            <h2 className='text-3xl font-semibold text-center py-2'>All Posts: ({news?.length})</h2>
            {
                [...news].reverse().map(n => <>

                    <div className='flex my-2 border-b border-dotted pb-1'>
                        <div className=' mr-2'>
                            <img className='w-[200px] h-[100px]' src={n.image} alt="" />
                        </div>
                        <div className=''>
                            <Link to={`news/${n._id}`} className='text-lg font-medium hover:underline'>{n.title}</Link>

                        </div>
                        <div className='ml-auto gap-2 flex'>
                            <button onClick={() => navigate(`/dashboard/edit/${n._id}`)} className='btn btn-primary btn-sm rounded-sm'>Edit Post</button>
                            <button className='btn btn-primary btn-sm rounded-sm'>Delete Post</button>
                        </div>
                    </div>

                </>)
            }

        </div>
    );
};

export default ManagePost;