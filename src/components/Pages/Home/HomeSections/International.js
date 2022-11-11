import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const International = () => {
    const [news, setNews] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(res => res.json())
            .then(data => {
                setNews(data)
                // setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                news.map(n => <>

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

export default International;