import React from 'react';

const CategoryPageSkeleton = () => {
    return (
        <div className="grid lg:grid-cols-4 gap-2 ">
            {
                [1, 2, 3, 4].map(n =>
                    <div role="status" className=" my-2 border-b border-dotted pb-1 border-gray-200  animate-pulse  ">
                        <div className="  mr-2 h-[200px] mb-4  bg-gray-300 rounded-sm dark:bg-gray-700">

                        </div>
                        <div className=''>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>


                        <span className="sr-only">Loading...</span>
                    </div>)
            }

        </div>
    );
};

export default CategoryPageSkeleton;