import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';


const EditNews = () => {
    const { id } = useParams();
    console.log(id)
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/news/${id}`)
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
    }, [])
    console.log(content);

    return (
        <div className='mx-24'>
            <h2 className="text-2xl font-semibold pt-2 text-center">Edit News</h2>

            <form >

                <div className="title py-2">
                    <label className="label">
                        <span className="label-text text-primary text-xl">Title</span>
                    </label>
                    <input defaultValue={news.title} name='title' type="text" placeholder="Title" className="input input-bordered border-primary rounded-sm w-full" required />
                </div>

                <div className="title py-2">
                    <label className="label">
                        <span className="label-text text-primary text-xl">Description</span>
                    </label>
                    {/* <textarea className='input !h-[200px] input-bordered border-primary  rounded-sm w-full' name="" id="" cols="30" rows="8" placeholder='Description'></textarea> */}
                    <JoditEditor
                        ref={editor}
                        value={news?.content}
                        defaultValue="hello world"

                        onChange={newContent => setContent(newContent)}
                    />
                </div>
                <div className="title py-2">
                    <label className="label">
                        <span className="label-text text-primary text-xl">Category</span>
                    </label>
                    <select defaultValue={news.category} name='category' className="select rounded-sm input border-primary select-bordered w-full ">
                        <option disabled selected>Category</option>
                        <option>Natioanl</option>
                        <option>International</option>
                        <option>Entertainment</option>
                    </select>
                </div>
                <div className="title py-2">
                    <label className="label">
                        <span className="label-text text-primary text-xl">Image</span>
                    </label>
                    <input name='image' type="file" placeholder="Title" className="input pl-0 rounded-sm w-full" />
                </div>



                <input type="submit" className='btn btn-primary w-full my-2 rounded-sm' value="Post" />
            </form>
            <div id="news"></div>
        </div>
    );
};

export default EditNews;