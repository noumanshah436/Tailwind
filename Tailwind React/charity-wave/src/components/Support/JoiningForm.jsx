import React from "react";

const JoiningForm = () => {
  return (
    <>
      <div name="JoiningForm" className="w-full py-32">
        <div className="max-w-[1240px] mx-auto flex justify-center items-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="nick"
                  type="text"
                />
                <p className="text-gray-600 text-xs italic">
                  Remove if not needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full resize-y bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
                <p className="text-gray-600 text-xs italic">
                  Re-size can be disabled by set by resize-none / resize-y /
                  resize-x / resize
                </p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="p-2 mb-4 px-8 py-3 font-medium"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoiningForm;
