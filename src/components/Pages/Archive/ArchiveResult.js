import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArchiveResult = ({ date }) => {

    const [archiveNews, setArchiveNews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(res => res.json())
            .then(data => setArchiveNews(data))
    }, [date])


    const filtertedNews = archiveNews?.filter(ar => ar.date === date);

    return (
        <div className='grid lg:grid-cols-4 gap-4'>
            {
                filtertedNews?.map(news => <div>

                    <div className="card card-compact h-85  bg-base-100 shadow-md rounded-none">
                        <figure className=''><img className='!h-[200px] w-[400px]' src={news.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <Link to={`/news/${news._id}`} className="card-title">{news.title}</Link>


                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ArchiveResult;