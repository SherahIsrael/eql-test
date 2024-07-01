# ** Library API **

Returns json data about books

## GET request. URL: /api/books

```
app.get("/api/books", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  res.json(books);
});
```

Sample Response 
```
 {
        "id": 1,
        "title": "Me Before You",
        "author": "Joho Moyes",
        "pages": "369"
    }
```
## GET request for the param ID. URL: /api/books/:id

```
app.get("/api/books/:id", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  res.json(books);
});
```

Sample Response 
```
 {
        "id": 1,
        "title": "Me Before You",
        "author": "Joho Moyes",
        "pages": "369"
  }
```

## GET POST request to create new book

URL: /api/books/:id

## GET PUT request to create new book

URL: /api/books/:id

## GET DELETE request to create new book

URL: /api/books/:id

```

