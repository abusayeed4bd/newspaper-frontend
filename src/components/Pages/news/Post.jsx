import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import ShareButtons from '../../Shared/ShareButtons';
import Spinner from '../../Shared/Spinner';

const Post = () => {

    const { id } = useParams();

    const { data, isLoading } = useQuery('news', () => fetch(`http://localhost:5000/news/${id}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Spinner />;
    }
    console.log(window.location.href);
    // console.log(document.getElementById("description").innerHTML(data?.content));
    console.log(data?.content)
    // if (data?.content) {
    //     document.querySelector("#description").appendChild(data?.content);
    // }
    const url = window.location.href;
    return (
        <div className='py-12 min-h-screen mx-2 lg:w-[60%] lg:mx-auto'>
            <h2 className='text-4xl font-bold '>{data.title}</h2>

            <div className='flex items-center justify-between'>
                <div className='flex items-center py-2'>
                    <div className="avatar placeholder mr-3">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span>MX</span>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold'>{data.author}</h4>
                </div>
                <div><ShareButtons url={url}></ShareButtons></div>
            </div>


            <p>Published on: {data.date}</p>


            <img src={data.image} alt="" />


            <div dangerouslySetInnerHTML={{ __html: data.content }} id="description"></div>


        </div>
    );
};

export default Post;