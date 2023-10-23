import { useState } from "react";
import { myBlogs } from "../../blogs";
import { useParams } from 'react-router-dom';

function getBlogById(blogId) {
    return myBlogs.find(blog => blog.id === blogId);
}

const BlogDetails = () => {

    const { id } = useParams();
    const blog = getBlogById(parseInt(id));
    const [liked, setLiked] = useState(false);



    const toggleLike = () => {
        let localLiked = liked;
        localLiked = !localLiked;
        setLiked(localLiked);
        if (localLiked) {
            console.log("liked");
        }
        else {
            console.log("unliked");
        }
    }

    return (

        <div name="blog_detail" className="w-full my-16 md:my-32">
            <div className="w-4/5 md:w-7/12 mx-auto md:mt-10">

                <div>
                    <h2 className="py-2 text-5xl font-bold">{blog.title}</h2>
                    <p className="text-gray-600 text-sm 2xl:text-lg font-semibold mb-6 my-4">Written by {blog.author}</p>
                    <div>
                        <img className="w-full object-cover h-40 md:h-4/5 mb-6 rounded" src={blog.blogImage} />
                        <p className="text-gray-600 text-sm 2xl:text-lg text-justify">{blog.body}</p>
                    </div>
                    <div className="my-4 flex space-x-4">

                        <div className="" onClick={toggleLike}>
                            {liked === false ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlogDetails;
