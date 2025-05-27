import mongoose from "mongoose";
import Book from "../models/book.model.js";

export const addBook = async (req, res) => {
  try {
    const { title, author, price, publishDate } = req.body;

    const book = new Book({
      title,
      author,
      price,
      publishDate,
    });
    await book.save();
    res.status(201).json({ success: true, message: "Book added", book });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error adding Book", error });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.error("Error fetching book by slug:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
export const putBookById = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }
  res.status(200).json({ success: true, message: "Book Updated.", data: book });
};

export const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    if (!book) return res.status(404).json({ message: "Books Not Found." });

    res.status(200).json({ success: true, book });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting book" });
  }
};
