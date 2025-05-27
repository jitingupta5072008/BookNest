import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-20 lg:px-40">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">
          About Our Bookstore
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A haven for book lovers. Discover stories that inspire, educate, and entertain.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Books"
          className="rounded-xl shadow-lg w-full object-cover h-[350px]"
        />

        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We believe in the power of stories to change lives. Our bookstore
            brings together a wide range of books from across genres and eras,
            curated to meet the interests of every kind of reader.
          </p>

          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Wide range of fiction, non-fiction, and academic titles</li>
            <li>Exclusive author-signed editions</li>
            <li>Affordable pricing & secure checkout</li>
            <li>Fast delivery with hassle-free returns</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-pink-700 mb-2">Thank You for Visiting!</h3>
        <p className="text-gray-600">We hope you find your next great read with us.</p>
      </div>
    </div>
  );
};

export default About;
