import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Book } from '../src/models/book';
import path from "path";
import bodyParser = require("body-parser");

dotenv.config();

const fs = require("fs-extra");
const morgan = require('morgan');

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(morgan('dev'));

const dbPath = path.join(__dirname, "/books.json");

const readBooksFromFile = (): Book[] => {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data) as Book[];
  } catch (error) {
    return [];
  }
};

const writeBooksToFile = (books: Book[]): void => {
  fs.writeFileSync(dbPath, JSON.stringify(books, null, 2), "utf-8");
};

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.use(express.urlencoded({extended: true})) // For the form
app.use(cors())
app.use(bodyParser.json());

app.get("/api/books", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  res.json(books);
});

app.get("/books/new", (req: Request, res: Response) => {
  res.render("newBook");
});

app.post("/api/books", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const book: Book = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
  };

  books.push(book);
  await writeBooksToFile(books);
  res.status(201).json(book);
});

app.get("/api/books/:id", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const book = books.find((t) => {
    t.id === parseInt(req.params.id)
});

  if (!book) {
      res.status(404).send("This book's ID has not been found.");
  } else {
      res.json(book);
  }
});

app.put("/api/books/:id", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const book = books.find((t) => {
    t.id === parseInt(req.params.id)
  });

  if (!book) {
      res.status(404).send("This book's ID cannot be found. So it cannot be updated.");
  } else {
      book.title = req.body.title || book.title;
      book.author = req.body.author || book.author;
      book.pages = req.body.pages || book.pages;

      await writeBooksToFile(books);
      res.json(book);
  }
});

app.delete("/api/books/:id", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  const index = books.findIndex((t) => {
    t.id === parseInt(req.params.id)
  });

  if (index === -1) {
      res.status(404).send("Book not found");
  } else {
      books.splice(index, 1);
      await writeBooksToFile(books);
      res.status(204).send();
  }
});

app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;