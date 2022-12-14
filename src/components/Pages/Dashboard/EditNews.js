import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const EditNews = () => {
    const { id } = useParams();
    console.log(id)
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [user] = useAuthState(auth);
    const author = user?.displayName;

    const image_key = "4bac9002e198d5a6a5c668843c11094b";
    const url = `https://api.imgbb.com/1/upload?key=${image_key}`;

    // formatted date=============================================
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const editDate = `${dd}-${mm}-${yyyy}`;


    // get method for defautl value fo form============================================

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/news/${id}`)
            .then(res => res.json())
            .then(data => {
                setNews(data)

            })
    }, [])
    console.log(content);

    // edit method function ===================================================================
    const handleSubitEditForm = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const category = e.target.category.value;
        const image = e.target.image.files[0];
        const formData = new FormData();
        formData.append("image", image)

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    // ==================================
                    fetch(`http://localhost:5000/update-news/${id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            title, category, content, author, date: news.date, image, editDate
                        }),
                    }).then(res => res.json())
                        .then(data => {

                            toast.success("post updated successfully");
                        })
                }
            })

        console.log(image);

    }


    return (
        <div className='mx-24'>
            <h2 className="text-2xl font-semibold pt-2 text-center">Edit News</h2>

            <form onSubmit={handleSubitEditForm}>

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