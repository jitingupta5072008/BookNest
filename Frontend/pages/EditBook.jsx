import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { BOOK_API } from "../Api/api";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    publishDate: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${BOOK_API}/books/${id}`);
        const book = response.data.data;
        setFormData({
          title: book.title,
          author: book.author,
          price: book.price,
          publishDate: book.publishDate.split("T")[0], // yyyy-mm-dd format
        });
      } catch (error) {
        toast.error("Failed to load book data");
        console.error(error);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BOOK_API}/books/${id}`, formData);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error("Update failed");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "author", "price", "publishDate"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium capitalize">{field.replace("Url", " URL")}</label>
            <input
              type={field === "price" ? "number" : field === "publishDate" ? "date" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-pink-200"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-700 transition"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
