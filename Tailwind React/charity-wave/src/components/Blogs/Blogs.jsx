import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { blogs, postData, myBlogs } from "../../blogs";
import Post from "./Post";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div name="blogs" className="w-full my-16 md:my-32">
      <div className="md:max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Inspiration Corner</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className="w-4/5 md:w-9/12 mx-auto md:mt-10">
          <div className="grid md:grid-cols-3 gap-4">
            {myBlogs.map(blog => (
              <div className="animate-fade-in-down mt-4 md:my-4 border border-gray-200 shadow-md rounded-md" key={blog.id}>
                <div className="flex flex-col">
                  <Link to={`/blogs/${blog.id}`}>
                    <div>
                      <img src={blog.blogImage} className="object-fit h-64 md:h-52 w-full" />
                    </div>
                    <div className="p-4 flex justify-between">
                      <div>
                        <h2 className="py-2 font-bold text-lg">{blog.title}</h2>
                        <p className="pb-2 text-sub-title">Written by {blog.author}</p>
                        <p className="pb-2 text-content">{blog.body.slice(0, 100)}<span className="text-primary">Read More.....</span></p>
                        <span className="inline-block bg-gray-50 shadow-md rounded-full px-2 md:px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{blog.category}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-16 pt-4 justify-items-center items-start">
          {blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-lg">
                  <div className="h-52">
                    <a href="#">
                      <img className="rounded-t-lg w-full h-full object-cover" src={blog.image} alt={blog.title} />
                    </a>
                  </div>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {blog.title}
                      </h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">{blog.body}</p>
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 justify-items-center">
          {postData.map((e) => {
            return <Post content={e} />;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
