import React, { useState } from 'react';
import ArchiveResult from './ArchiveResult';
import { useNavigate } from 'react-router-dom';

const Archive = () => {
    const [archiveSearch, setArchiveSearch] = useState('')
    const navigate = useNavigate()

    const handleArchiveSearch = (e) => {
        setArchiveSearch(e.target.value)
    }


    const dateArr = archiveSearch.split("-");
    const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`

    console.log(date)
    return (
        <div className='min-h-screen px-24'>
            <div className='w-96 mx-auto my-3'>
                <input onChange={handleArchiveSearch} className='input input-bordered rounded-sm w-full' type="date" name="archiveSearch" id="archiveSearch" />
            </div>

            <ArchiveResult date={date} />

        </div>
    );
};

export default Archive;