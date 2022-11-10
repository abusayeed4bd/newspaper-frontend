import React from 'react';
import { useQuery } from 'react-query';

const International = () => {
    const { data: news, isLoading } = useQuery('products', () => fetch('fakedata.json')
        .then(res => res.json()))

    if (isLoading) {
        return "Loading";
    }
    return (
        <div>
            {
                news.map(n => <>

                    <div className="card w-full card-side bg-base-100 shadow-sm rounded-none my-1">
                        <figure><img className='w-[200px]' src={n.image} alt="Movie" /></figure>
                        <div className="card-body p-1">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>

                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default International;