import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Modal from "./Modal";

const API_URL = "http://localhost:8000";

const initial_state = {
  name: "",
  email: "",
  motivation: "",
  city: "",
  country: "",
  age: 1,
  phone: "",
  address: "",
};

const sample = {
  address: "this is my address",
  age: 20,
  city: "Lahore",
  country: "Pakistan",
  email: "Blackpower.208mq@hotmail.com",
  motivation: "this is my address",
  name: "Nomi",
  phone: "923424556029",
  user_type: "volunteer",
};

const JoiningForm = () => {
  const [person, setPerson] = useState(initial_state);
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState({
    isError: false,
    message: "",
  });

  const closeModal = () => {
    setShowModal(false);
    setResponse({ isError: false, message: "" });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(person);

    try {
      const res = await axios.post(`${API_URL}/users`, {
        ...person,
        user_type: "volunteer",
      });

      setResponse({ isError: false, message: "Thanks for joining" });
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setResponse({ isError: true, message: error.response.data.detail });
      setShowModal(true);
    }
  };

  return (
    <>
      <div name="JoiningForm" className="w-full py-32">
        <div className="my-10 text-center w-full text-xl font-bold lg:mr-4 lg:text-3xl">
          Joins us
        </div>
        <div className="max-w-[1240px] mx-auto flex justify-center items-center">
          <form className="w-full max-w-lg m-2" onSubmit={handleSubmit}>
            {showModal && <Modal closeModal={closeModal} response={response} />}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  name="name"
                  type="text"
                  value={person.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  max="200"
                  value={person.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  value={person.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="city"
                  name="city"
                  type="text"
                  value={person.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="country"
                  name="country"
                  type="text"
                  value={person.country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  country={"pk"}
                  value={person.phone}
                  onChange={(e) => setPerson({ ...person, phone: e })}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  name="address"
                  type="text"
                  value={person.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="motivation"
                >
                  Motivation
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full resize-y bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                  id="motivation"
                  name="motivation"
                  value={person.motivation}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="p-2 mb-4 px-8 py-3 font-medium"
                  type="submit"
                >
                  Submit
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
