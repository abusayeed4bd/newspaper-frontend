import React from 'react';
import { useContext, useState } from 'react';
import Context from './../../Hooks/Context';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const SearchResult = () => {
    const [searchResult, setSearchResult] = useState([])
    const { search } = useLocation();
    const query = new URLSearchParams(search)
    const q = query.get("query");


    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [q])

    const sortednews = searchResult?.filter(s => s.author?.toLowerCase().includes(q) || s.title?.toLowerCase().includes(q) || s.content?.toLowerCase().includes(q) || s.author?.includes(q) || s.title?.includes(q) || s.content?.includes(q))



    return (
        <div className="min-h-screen px-24">
            <div className="text-xl text-center font-normal py-3">
                Search result for "{q}"
            </div>
            <div className="grid lg:grid-cols-4 gap-2">
                {
                    sortednews.map(n => <div className="card card-compact border p-2  bg-base-100 rounded-none">
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

export default SearchResult;