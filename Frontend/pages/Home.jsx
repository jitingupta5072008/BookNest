import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BOOK_API } from "../Api/api";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`${BOOK_API}/books`);
        setBooks(res.data.book);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BOOK_API}/books/${id}`);
      toast.success("Book deleted");
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-16 px-6 md:px-16 lg:px-32">
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl sm:text-5xl font-extrabold tracking-wide text-pink-600 mb-5 drop-shadow-md">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-lg text-pink-900/80 leading-relaxed max-w-xl mx-auto">
          Explore a curated collection of timeless classics and new gems. Dive into stories that move your soul and expand your mind.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-pink-600 mb-10 tracking-wide drop-shadow-sm">
          All Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading ? (
            Array(6).fill().map((_, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg h-[300px] animate-pulse flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-6 bg-pink-200 rounded w-3/4"></div>
                  <div className="h-4 bg-pink-100 rounded w-1/2"></div>
                  <div className="h-4 bg-pink-100 rounded w-1/3"></div>
                  <div className="h-4 bg-pink-100 rounded w-2/5"></div>
                </div>
                <div className="flex gap-4 mt-6">
                  <div className="h-10 bg-pink-200 rounded w-20"></div>
                  <div className="h-10 bg-pink-200 rounded w-20"></div>
                </div>
              </div>
            ))
          ) : books.length === 0 ? (
            <div className="col-span-3 flex justify-center">
              <img src="https://res.cloudinary.com/dfdenma4g/image/upload/v1745485919/myecoom/vroxqf53dp9c1qgnmied.gif" alt="No books" className="w-96" />
            </div>
          ) : (
            books.slice().reverse().map((book) => (
              <div key={book._id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between h-[300px]">
                <div className="flex-grow">
                  <h3 className="text-2xl font-extrabold text-pink-600 mb-2 tracking-tight">
                    {book.title}
                  </h3>
                  <p className="text-pink-700 font-semibold mb-1">
                    Author: <span className="font-normal">{book.author}</span>
                  </p>
                  <p className="text-pink-700 font-semibold mb-1">
                    Price: <span className="font-normal">₹{book.price}</span>
                  </p>
                  <p className="text-pink-700 font-semibold">
                    Published:{" "}
                    <span className="font-normal">
                      {new Date(book.publishDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => navigate(`/books/${book._id}`)} className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                  <button onClick={() => handleDelete(book._id)} className="flex items-center gap-1 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
