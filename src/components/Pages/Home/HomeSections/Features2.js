import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const Features2 = () => {
    // const { data: news, isLoading } = useQuery('products', () => fetch('http://localhost:5000/news')
    //     .then(res => res.json()))

    // if (isLoading) {
    //     return "Loading";
    // }


    const [news, setNews] = useState();
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(res => res.json())
            .then(data => {
                setNews(data)
                // setLoading(false)
            })
    }, [])

    // if (loading) {
    //     return "Loading..."
    // }


    // if (isLoading) {
    //     return "Loading";
    // }
    // console.log(news)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                news?.map(n => <div key={n._id}>

                    <div className="card h-[200px] rounded-none bg-base-100 shadow-xl image-full relative">
                        <figure><img className='w-100' src={n.image} alt="Shoes" /></figure>
                        <div className="card-body p-1 !absolute bottom-0 !text-white">
                            <Link className='hover:underline' to={`/news/${n._id}`}>{n.title}</Link>


                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Features2;