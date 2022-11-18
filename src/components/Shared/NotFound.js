import React from 'react';
import notfound from "../../assets/image/404.png"

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <img className='max-w-[500px]' src={notfound} alt="404 not found" />
        </div>
    );
};

export default NotFound;