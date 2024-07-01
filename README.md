# Library API

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

