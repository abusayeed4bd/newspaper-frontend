import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Post = () => {

    const { id } = useParams();

    const { data, isLoading } = useQuery('news', () => fetch(`http://localhost:5000/news/${id}`)
        .then(res => res.json()))

    if (isLoading) {
        return <p>Loading...</p>;
    }
    console.log(window.location.href);

    // if (data.content) {
    //     document.getElementById("description").innerHTML = data.content;
    // }
    return (
        <div className='py-12 min-h-screen lg:w-[60%] mx-auto'>
            <h2 className='text-4xl font-bold '>{data.title}</h2>


            <div className='flex items-center py-5'>
                <div className="avatar placeholder mr-3">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span>MX</span>
                    </div>
                </div>
                <h4 className='text-xl font-semibold'>{data.author}</h4>
            </div>

            <p>Published on: {data.date}</p>
            <img src={data.image} alt="" />

            {/* {
                data.content && <div id="description"></div>

            } */}
        </div>
    );
};

export default Post;