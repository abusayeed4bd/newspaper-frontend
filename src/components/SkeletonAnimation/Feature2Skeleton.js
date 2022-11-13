import React from 'react';

const Feature2Skeleton = () => {
    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                [1, 2, 3, 4].map(n =>
                    <div role="status" class="flex justify-center items-center max-w-sm h-[200px] bg-gray-300 rounded-sm animate-pulse dark:bg-gray-700">

                        <span class="sr-only">Loading...</span>
                    </div>

                )
            }
        </div>
    );
};

export default Feature2Skeleton;