import React from 'react';
import { useContext, useState } from 'react';
import Context from './../../Hooks/Context';
import { useLocation } from 'react-router-dom';
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
    const sortednews = searchResult?.filter(s => s.title?.toLowerCase().includes(q))
        .filter(s => s.title.toLowerCase().includes(q))
        .filter(s => s.content.toLowerCase().includes(q))

    return (
        <div className="h-screen">
            <div className="text-xl text-center font-normal py-3">
                Search result for "{q}""
            </div>

            {
                sortednews.map(news => <p>{news.title}</p>)
            }
        </div>
    );
};

export default SearchResult;