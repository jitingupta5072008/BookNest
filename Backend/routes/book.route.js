import express from "express";
import { addBook, deleteBook, getBookById, getBooks, putBookById } from "../controllers/book.controller.js";

const router = express.Router()


router.route('/books').post(addBook)
router.route('/books').get(getBooks);
router.route('/books/:id').get(getBookById);
router.route('/books/:id').put(putBookById);
router.route('/books/:id').delete(deleteBook);


export default router;