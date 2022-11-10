import React from 'react';
import { useQuery } from 'react-query';

const Features2 = () => {
    const { data: news, isLoading } = useQuery('products', () => fetch('fakedata.json')
        .then(res => res.json()))

    if (isLoading) {
        return "Loading";
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                news.map(news => <>

                    <div className="card h-[200px] rounded-none bg-base-100 shadow-xl image-full relative">
                        <figure><img className='w-100' src={news.image} alt="Shoes" /></figure>
                        <div className="card-body p-1 !absolute bottom-0 !text-white">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Features2;