import React, { useState } from "react";
import { BOOK_API } from "../Api/api";
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddBook = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    publishDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BOOK_API}/books`, formData);
      toast.success(response.data.message);
      setFormData({
        title: "",
        author: "",
        price: "",
        publishDate: "",
      });
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Add New Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter book title"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-pink-200"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Enter author's name"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-pink-200"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Price (in ₹)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter price"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-pink-200"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Publish Date
          </label>
          <input
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
            required
            placeholder="Select publish date"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-pink-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
