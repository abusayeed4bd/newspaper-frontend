import React from 'react';

const CategorySkeleton = () => {
    return (
        <div>

            <div role="status" className="flex my-2 border-b border-dotted pb-1 border-gray-200  animate-pulse   w-[100%]">
                <div className=" w-[30%] mr-2 h-[100px] mb-4  bg-gray-300 rounded-sm dark:bg-gray-700">

                </div>
                <div className='w-[70%]'>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>


                <span className="sr-only">Loading...</span>
            </div>

        </div>
    );
};

export default CategorySkeleton;