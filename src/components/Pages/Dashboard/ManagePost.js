import React, { useEffect, useState } from 'react';
import CategorySkeleton from './../../SkeletonAnimation/CategorySkeleton';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const ManagePost = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false)
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



    const handleDeletePost = (id) => {
        MySwal.fire({
            title: <strong>Are You Sure?</strong>,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/news/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }).then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {

                            Swal.fire('Successfully Deleted!', '', 'success');

                            const restData = news.filter(news => id !== news._id);
                            setNews(restData);
                        } else {
                            Swal.fire('Failed to Delete!', '', 'error');
                        }
                    })
            }
        })

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
                            <button onClick={() => navigate(`/dashboard/edit/${n._id}`)} className='btn btn-primary btn-sm rounded-sm'>
                                {/* icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>

                                Edit</button>


                            <button onClick={() => handleDeletePost(n._id)} className='btn btn-primary btn-sm rounded-sm'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                                Delete</button>
                        </div>
                    </div>

                </>)
            }

        </div>
    );
};

export default ManagePost;